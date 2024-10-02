require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = 10;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, enum: ['admin', 'user'], default: 'user' }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    }
    next();
});

const User = mongoose.model('User', userSchema);


const commandSchema = new mongoose.Schema({
    userId: String,
    items: Array,
    deliveryDetails: {
        firstName: String,
        lastName: String,
        address: String,
        apartment: String,
        city: String,
        postalCode: String,
        phoneNumber: String
    },
    subtotal: Number
}, { timestamps: true });

const Command = mongoose.model('Command', commandSchema);

const deliveredOrderSchema = new mongoose.Schema({
    deliveryDetails: {
        firstName: String,
        lastName: String,
        address: String,
        apartment: String,
        city: String,
        postalCode: String,
        phoneNumber: String
    },
    items: Array,
    subtotal: Number,
    createdAt: { type: Date, default: Date.now }
});

const DeliveredOrder = mongoose.model('DeliveredOrder', deliveredOrderSchema);

app.post('/checkout', async (req, res) => {
    const { userId, items, deliveryDetails, subtotal } = req.body;
    try {
        const newCommand = new Command({ userId, items, deliveryDetails, subtotal });
        await newCommand.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place the order' });
    }
});

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, phone });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id, userType: user.type }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token, userType: user.type });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

app.get('/orders', async (req, res) => {
    try {
        const orders = await Command.find();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
});


app.post('/deliveredOrders', async (req, res) => {
    console.log('Received request to mark order as delivered:', req.body); // Log the request body
    const { orderId } = req.body;

    try {
        const order = await Command.findById(orderId); 
        if (!order) {
            console.log(`Order not found for ID: ${orderId}`);
            return res.status(404).json({ message: 'Order not found' });
        }

        console.log('Order found:', order); 

        const deliveredOrder = new DeliveredOrder({
            deliveryDetails: order.deliveryDetails,
            items: order.items,
            subtotal: order.subtotal,
            createdAt: order.createdAt
        });

        await deliveredOrder.save();
        console.log(`Order ${orderId} saved to DeliveredOrder`);

        await Command.findByIdAndDelete(orderId); 
        console.log(`Order ${orderId} deleted from Command`);

        res.status(200).json({ message: 'Order moved to deliveredOrders', deliveredOrder });
    } catch (error) {
        console.error('Error moving order to deliveredOrders:', error);
        res.status(500).json({ message: 'Error moving order to deliveredOrders' });
    }
});




app.get('/deliveredOrders', async (req, res) => {
    try {
        const deliveredOrders = await DeliveredOrder.find({});
        console.log('Fetched delivered orders:', deliveredOrders); 
        res.status(200).json(deliveredOrders);
    } catch (error) {
        console.error('Error fetching delivered orders:', error);
        res.status(500).json({ message: 'Error fetching delivered orders' });
    }
});



const authorizeAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        if (decoded.userType !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = decoded;
        next();
    });
};

app.use('/admin', authorizeAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
