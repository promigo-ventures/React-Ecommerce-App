import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2023 Promigo Ventures - All rights reserved</p>
        <div className="social-links">
          <a href="/">Twitter</a>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;