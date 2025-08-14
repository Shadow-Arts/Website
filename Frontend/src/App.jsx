import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Events from './components/Events/Events.jsx';
import Courses from "./components/Courses/Courses.jsx";
import FAQs from './components/Footer/faqs.jsx';
import PrivacyPolicy from './components/Footer/privacy-policy.jsx';
import SearchResults from './components/SearchResults/SearchResult.jsx';
import AdminLogin from './components/Admin/AdminLogin.jsx';
import AdminEvents from './components/Admin/AdminEvents.jsx';
import AdminCourses from './components/Admin/AdminCourses.jsx';
import AdminGallery from './components/Admin/AdminGallery.jsx';
import Order from './components/Orders/Order.jsx';
import myFavicon from './assets/logo.png';

import './styles/global.css';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const isAdmin = !!localStorage.getItem('adminToken');

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
      document.title = "Shadow Arts"; // This would override "Shadow Arts"
    }, []);
  // Set favicon dynamically
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']");
    link.href = myFavicon;
  }, []);
    

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Router basename="/">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/courses" element={<Courses />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/admin/events" element={isAdmin ? <AdminEvents /> : <AdminLogin onLogin={() => window.location.reload()} />} />
          <Route path="/admin/courses" element={isAdmin ? <AdminCourses /> : <AdminLogin onLogin={() => window.location.reload()} />} />
          <Route path="/admin/gallery" element={isAdmin ? <AdminGallery /> : <AdminLogin onLogin={() => window.location.reload()} />} />
          <Route path="/admin/login" element={<AdminLogin onLogin={() => window.location.reload()} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;