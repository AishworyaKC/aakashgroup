import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <p>Follow us:</p>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </div>
      <p>&copy; 2025 Aakash Labs Clone</p>
    </footer>
  );
};

export default Footer;