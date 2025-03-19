// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCart, removeFromCart } from '../services/localStorageService';

const Header = () => {
  const [cart, setCart] = useState(getCart());
  const [cartSize, setCartSize] = useState(cart.length);

  useEffect(() => {
    const cart = getCart();
    setCartSize(cart.length);
  }, []);

  const handleRemove = (eventId) => {
    removeFromCart(eventId);
    setCartSize(getCart().length);
  };


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
            <span className="cart-badge">{cartSize}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
