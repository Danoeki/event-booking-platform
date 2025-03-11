// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>ResEvents</h1>
      <nav>
        <Link to="/">
          <i className="fas fa-home fa-lg"></i>
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart fa-lg"></i>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
