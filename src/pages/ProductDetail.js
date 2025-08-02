import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <h3>Features</h3>
        <ul className="specs">
          {product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;