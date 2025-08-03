import React from 'react';
import { Search, Sun, Moon, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  // Handle search submit (navigate to /search with query param)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsMenuOpen(false); // Optionally close mobile menu on search
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
            <img src={require('../../assets/logo.png')} alt="Shadow Arts Logo" className="logo-img" />
            <span>Shadow Arts</span>
          </motion.div>

          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search for arts, courses, events..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <Search className="search-icon" size={20} />
            </button>
          </form>

          <div className="header-actions">
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
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Student Works</Link></li>
            <li><Link to="/courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
            <li><Link to="/orders" className='nav-link' onClick={() => setIsMenuOpen(false)}>Order</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;