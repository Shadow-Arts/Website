import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Youtube, Tag, Phone } from 'lucide-react';
import './Contact.css'; // Make sure to import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data (send to backend)
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="social-media">
        <h3>Connect with Us on Social Media</h3>
        <div className="social-links">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <Phone size={30} /> 
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={30} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube size={30} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <Tag size={30} /> 
          </a>
        </div>
      </div>

      <div className="message-form">
        <h3>Message Us Here</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
