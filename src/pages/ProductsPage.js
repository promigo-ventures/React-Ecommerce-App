// ProductsPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Latest Gadgets</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;