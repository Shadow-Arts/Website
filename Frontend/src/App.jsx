import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Collaborate from './components/Collaborate/Collaborate.jsx';
import Contact from './components/Contact/Contact.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Profile from './components/Profile/Profile.jsx';
import Events from './components/Events/Events.jsx';
import AuthWrapper from './components/Auth/AuthWrapper.jsx';
import PrivateRoute from './components/PivateRoute/PrivateRoute.jsx';
import './styles/global.css';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleLogin = (credentials) => {
    console.log('Login attempt with:', credentials);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  };

  const handleSignup = (userData) => {
    console.log('Signup with:', userData);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router basename="/ShadowArts">
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <main className="container">
        <Routes>
          <Route path="/" element={<AuthWrapper />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Auth Pages */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" replace /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/" replace /> : <Signup onSignup={handleSignup} />} />

          {/* Protected Pages */}
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/collaborate" element={isAuthenticated ? <Collaborate /> : <Navigate to="/login" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
