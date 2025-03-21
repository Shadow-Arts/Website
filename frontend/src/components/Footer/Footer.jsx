import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-section">
          <h3>Information</h3>
          <ul className="footer-links">
            <li><a href="google.com" className="footer-link">About Us</a></li>
            <li><a href="google.com" className="footer-link">Contact Us</a></li>
            <li><a href="google.com" className="footer-link">Collaborate</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Need Help?</h3>
          <ul className="footer-links">
            <li><a href="google.com" className="footer-link">FAQs</a></li>
            <li><a href="google.com" className="footer-link">Return Policy</a></li>
            <li><a href="google.com" className="footer-link">Track Order</a></li>
            <li><a href="google.com" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;