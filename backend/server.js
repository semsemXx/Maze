const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const { v4: uuidv4 } = require('uuid');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hashedPassword, phone });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

app.post('/cart/add', async (req, res) => {
  const { userId, name, size, price, image } = req.body;
  console.log('Request received:', { userId, name, size, price, image });
  try {
    const newItem = new Cart({ userId, name, size, price, image });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart successfully', item: newItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Failed to add item to cart', error: error.message });
  }
});



app.get('/cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart items', error });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


