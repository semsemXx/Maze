import React, { useContext } from 'react';
import classes from '@/css/cart.module.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '@/context/CartContext';
import { UserContext } from '@/context/UserContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  const handleCheckout = () => {
    if (cartItems.length > 0 && subtotal > 0) {
      navigate('/Checkout', { state: { cartItems, subtotal } });
    }
  };

  const { user } = useContext(UserContext);

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
          {user ? (
            cartItems.length > 0 ? (
              cartItems.map((item) => (
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
              ))
            ) : (
              <tr>
                <td colSpan="5" className={classes.emptyMessage}>
                  Your cart is empty.
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan="8" className={classes.emptyMessage}>
              You're currently logged out. Your cart will be here when you return.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={classes.orderdiv}>
        <p className={classes.ordersum}>ORDER SUMMARY</p>
        <br />
        <p className={classes.subtotal}>
          Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {subtotal} DT
        </p>
        <p className={classes.shipcalc}>Shipping is calculated on checkout</p>
        <button 
          onClick={handleCheckout} 
          className={classes.checkoutButton}
          disabled={cartItems.length === 0 || subtotal === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
