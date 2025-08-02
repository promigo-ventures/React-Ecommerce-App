import React from 'react';
import { useCart } from '../contexts/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutPage;