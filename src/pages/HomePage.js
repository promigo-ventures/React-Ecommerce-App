import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Promigo Ventures</h1>
        <p>Your Destination for Cutting-Edge Gadgets</p>
        <Link to="/products" className="btn explore-btn">
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;