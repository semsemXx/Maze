import React, { useState } from 'react';
import classes from '@/css/checkout.module.css';
import { useNavigate } from 'react-router-dom';
import shirt from '@/image/shirt.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


export default function Checkout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationMessages, setValidationMessages] = useState({});

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const messages = {};
    const nameRegex = /^[a-zA-Z\s]*$/; 
    const postalCodeRegex = /^\d{4,6}$/; 
    const phoneRegex = /^\d{8}$/; 

    if (!firstName || !nameRegex.test(firstName)) {
      messages.firstName = 'First name is required and only letters';
    }
    if (!lastName || !nameRegex.test(lastName)) {
      messages.lastName = 'Last name is required and only letters';
    }
    if (!address) {
      messages.address = 'Address is required';
    }
    if (!city) {
      messages.city = 'City is required';
    }
    if (!postalCode || !postalCodeRegex.test(postalCode)) {
      messages.postalCode = 'Valid postal code is required';
    }
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      messages.phoneNumber = 'Valid phone number is required';
    }

    setValidationMessages(messages);

    if (Object.keys(messages).length === 0) {
      alert('Order placed successfully!');
      navigate('/confirmation');
    }
  };

  return (
    <div className={classes.Checkoutdiv}>
      <p className={classes.Mateha}>Matehaa Streetwear</p>
      <img className={classes.linenav} src="src/image/lineNav.png" alt="" />
      <Link to='/Cart' className={classes.icon}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
      <p className={classes.delevery}>Delivery</p>
      <div className={classes.inputdiv}>
        <input
          className={`${classes.fname} ${validationMessages.firstName ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.firstName || 'First name'}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className={`${classes.lname} ${validationMessages.lastName ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.lastName || 'Last name'}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className={`${classes.add} ${validationMessages.address ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.address || 'Address'}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className={classes.appart}
          type="text"
          placeholder="Apartment"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
        <input
          className={`${classes.city} ${validationMessages.city ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.city || 'City'}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className={`${classes.code} ${validationMessages.postalCode ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.postalCode || 'Postal code'}
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          className={`${classes.phone} ${validationMessages.phoneNumber ? classes.errorInput : ''}`}
          type="text"
          placeholder={validationMessages.phoneNumber || 'Phone number'}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className={classes.placeorder} onClick={handlePlaceOrder}>
          Place order
        </button>
        <p className={classes.payment}>Payment on delivery</p>
        <p className={classes.seeshipping}>See shipping and payment policy.</p>
        <p className={classes.copyright}>All rights reserved by MATEHA STREETWEAR.</p>
      </div>
      <div className={classes.sub}>
        <div className={classes.productRow}>
          <div className={classes.productBox}>
            <img src={shirt} alt="Shirt" className={classes.productImage} />
            <div className={classes.productDetails}>
              <p className={classes.productName}>Maze 1</p>
              <p className={classes.productSize}>Size: M</p>
            </div>
            <div className={classes.productPrice}>60DT</div>
          </div>

          <div className={classes.productBox}>
            <img src={shirt} alt="Shirt" className={classes.productImage} />
            <div className={classes.productDetails}>
              <p className={classes.productName}>Maze 2</p>
              <p className={classes.productSize}>Size: L</p>
            </div>
            <div className={classes.productPrice}>90DT</div>
          </div>
        </div>

        <div className={classes.summary}>
          <div className={classes.summaryItem}>
            <p>Subtotal</p>
            <p>150dt</p>
          </div>
          <div className={classes.summaryItem}>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className={classes.summaryItem}>
            <p>TOTAL</p>
            <p>150dt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
