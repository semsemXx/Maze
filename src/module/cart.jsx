import React, { useState } from 'react';
import classes from '@/css/cart.module.css';
import { useNavigate } from 'react-router-dom';
import shirt from '@/image/shirt.png';


export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, product: 1, name: 'Maze 1', size: 'S', price: '60dt', image: shirt },
    { id: 2, product: 2, name: 'Maze 2', size: 'M', price: '60dt', image: shirt },
    { id: 3, product: 3, name: 'Maze 3', size: 'L', price: '60dt', image: shirt },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    navigate('/Checkout');
  };

  return (
    <div className={classes.cartdiv}>
      <p className={classes.continue}>Continue Shopping</p>
      <table className={classes.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Size</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} className={classes.productImage} />
              </td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>
                <button onClick={() => handleRemove(item.id)} className={classes.removeButton}>
                  Remove
                </button>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.orderdiv}>
        <p className={classes.ordersum}>ORDER SUMMARY</p>
        <br />
        <p className={classes.subtotal}>Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;150DT</p>
        <p className={classes.shipcalc}>Shipping is calculated on checkout</p>
        <button onClick={handleCheckout} className={classes.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
}
