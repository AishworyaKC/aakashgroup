import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Aakash Labs</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/api-page" className="nav-link">API Page</Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
