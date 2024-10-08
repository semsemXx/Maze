const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  cartItems: [{
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
  }],
  subtotal: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
