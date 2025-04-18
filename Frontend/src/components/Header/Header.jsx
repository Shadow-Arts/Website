import React from 'react';
import { Palette, Search, ShoppingCart, User, Sun, Moon, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  // 🔒 Check if user is logged in
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

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
            <span>Shadow Arts</span>
          </motion.div>

          <div className="search-bar">
            <input type="text" placeholder="Search for arts & crafts..." />
            <Search className="search-icon" size={20} />
          </div>

          <div className="header-actions">
            <User 
              size={24} 
              className="clickable-icon"
              onClick={handleProfileClick} 
              title="Profile" 
            />
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
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link to="/workshops" className="nav-link">Courses</Link></li>
            <li><Link to="/events" className="nav-link">Events</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
