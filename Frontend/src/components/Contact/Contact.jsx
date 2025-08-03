import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Youtube, Tag } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

const SERVICE_ID = 'service_vglh77v';
const TEMPLATE_ID = 'template_lz0o0zs';
const PUBLIC_KEY = '1K5nbrebWo95zVakd'; // sometimes called user_id

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="social-media">
        <h3>Connect with Us on Social Media</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/teamshadowarts" target="_blank" rel="noopener noreferrer">
            <Facebook size={30} />
          </a>
          <a href="https://instagram.com/_shadowarts_official?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
            <Instagram size={30} />
          </a>
          <a href="https://twitter.com/teamshadowarts" target="_blank" rel="noopener noreferrer">
            <Twitter size={30} />
          </a>
          <a href="https://youtube.com/@ShadowArts_Official?si=yQLt80KSo09oxA9p" target="_blank" rel="noopener noreferrer">
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
            type="text"
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
          <button type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;