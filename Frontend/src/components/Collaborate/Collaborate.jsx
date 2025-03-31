import React, { useState } from 'react';
import { Mail, Briefcase, Linkedin } from 'lucide-react';
import './Collaborate.css';

const Collaborate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
    <section className="collaborate-section">
      <div className="collaborate-container">
        <h1 className="collaborate-title">Collaborate With Us</h1>
        <p>We would love to work with you! Share your ideas and let's create amazing things together.</p>
        <div className="collaborate-form">
          <h3>Tell Us About Your Collaboration</h3>
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
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company Name"
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
            <button type="submit">Submit Collaboration</button>
          </form>
        </div>

        <div className="partners-section">
          <h3>Our Partners</h3>
          <div className="partners-logos">
            <img src="partner1-logo.png" alt="Partner 1" />
            <img src="partner2-logo.png" alt="Partner 2" />
            <img src="partner3-logo.png" alt="Partner 3" />
            <img src="partner4-logo.png" alt="Partner 4" />
          </div>
        </div>

        <div className="connect-with-us">
          <h3>Connect with Us on Social Media</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} />
            </a>
            <a href="mailto:info@company.com">
              <Mail size={30} />
            </a>
            <a href="https://www.company.com">
              <Briefcase size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
