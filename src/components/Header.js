// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/localStorageService';

const Header = () => {
  const [cartSize, setCartSize] = useState(getCart().length);

  useEffect(() => {
    const updateCartSize = () => {
      setCartSize(getCart().length);
    };
    updateCartSize();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setCartSize(getCart().length);
    });
  }, []);

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={require(`../assets/logo-ResEvents.png`)} alt="Logo" className="logo" />
          <h1>ResEvents</h1>
        </div>
      </Link>
      <nav>
        <Link to="/">
          <i className="fas fa-home fa-lg"></i>
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart fa-lg"></i>
          {cartSize > 0 && (
            <span className="cart-badge">●</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
