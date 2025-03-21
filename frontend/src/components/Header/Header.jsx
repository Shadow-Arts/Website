import React from 'react';
import { Palette, Search, ShoppingCart, User, Sun, Moon, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Palette size={32} />
            <span>ArtsCrafts</span>
          </motion.div>
          
          <div className="search-bar">
            <input type="text" placeholder="Search for arts & crafts..." />
            <Search className="search-icon" size={20} />
          </div>
          
          <div className="header-actions">
            <User size={24} />
            <ShoppingCart size={24} />
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <Menu 
              size={24} 
              className="mobile-menu" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="google.com" className="nav-link">Home</a></li>
            <li><a href="google.com" className="nav-link">Shop Now</a></li>
            <li><a href="google.com" className="nav-link">New Arrivals</a></li>
            <li><a href="google.com" className="nav-link">Contact</a></li>
            <li><a href="google.com" className="nav-link">About Us</a></li>
            <li><a href="google.com" className="nav-link">Help</a></li>
            <li><a href="google.com" className="nav-link">Collaborate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;