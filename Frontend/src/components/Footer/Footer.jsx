import React from 'react';
import { Link } from 'react-router-dom'; 
import { Instagram, Twitter, Facebook, Youtube, Tag, Linkedin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Information Section */}
        <div className="footer-section">
          <h3>Information</h3>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            <li><Link to="/collaborate" className="footer-link">Collaborate</Link></li>
          </ul>
        </div>
        
        {/* Need Help Section */}
        <div className="footer-section">
          <h3>Need Help?</h3>
          <ul className="footer-links">
            <li><Link to="/faqs" className="footer-link">FAQs</Link></li>
            <li><Link to="/return-policy" className="footer-link">Return Policy</Link></li>
            <li><Link to="/track-order" className="footer-link">Track Order</Link></li>
            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>
        
        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
          
          <a href="https://www.facebook.com/teamshadowarts" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} className="icons"/>
          </a>
          <a href="https://instagram.com/_shadowarts_official?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
          <Instagram size={30}  className="icons"/>
          </a>
          <a href="https://twitter.com/teamshadowarts" target="_blank" rel="noopener noreferrer">
          <Twitter size={30}  className="icons"/>
          </a>
          <a href="https://youtube.com/@ShadowArts_Official?si=yQLt80KSo09oxA9p" target="_blank" rel="noopener noreferrer">
          <Youtube size={30}  className="icons"/>
          </a>
          <a href="http://www.linkedin.com/in/shadowarts" target="_blank" rel="noopener noreferrer">
          <Linkedin size={30}  className="icons"/> 
          </a>
        </div>
        </div>
      </div>
      <br/>
      <p className="copyright">&copy; 2025 ArtsCrafts. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
