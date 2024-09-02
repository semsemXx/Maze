const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email, password, phone });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user', error });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Login failed', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
