// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="btn view-details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;