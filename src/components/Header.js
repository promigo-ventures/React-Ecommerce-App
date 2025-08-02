// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Promigo Ventures</h1>
        </Link>
        <nav className="nav">
          <Link to="/products">Products</Link>
          <Link to="/checkout" className="cart-link">
            🛒 Cart ({cart.length})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;