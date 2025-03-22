import React from 'react';
import { motion } from 'framer-motion'; // For animations
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.h1 
          className="about-title" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20221124/pngtree-group-of-successful-young-people-formal-teamwork-coworkers-photo-image_42157746.jpg" alt="Our Team" />
            
          </motion.div>

          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, our company started with a simple vision: to create products that make a difference in people's lives. 
              What began as a small startup has grown into a passionate team dedicated to innovation and quality.
            </p>

            <h2>Our Mission</h2>
            <p>
              We strive to develop innovative solutions that combine cutting-edge technology with intuitive design. 
              Our mission is to provide products that are not only functional but also enhance the everyday experiences of our customers.
            </p>

            <h2>Our Values</h2>
            <ul className="about-values">
              <motion.li 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <strong>Innovation:</strong> We constantly push boundaries to create new and better solutions.
              </motion.li>
              <motion.li 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <strong>Quality:</strong> We maintain the highest standards in everything we do.
              </motion.li>
              <motion.li 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <strong>Customer Focus:</strong> Our customers' needs drive our decisions and development.
              </motion.li>
              <motion.li 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <strong>Sustainability:</strong> We're committed to environmentally responsible practices.
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <motion.div 
          className="partners-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Partners</h2>
          <div className="partners-logos">
            <motion.img 
              src="https://via.placeholder.com/150x50.png?text=Partner+1" 
              alt="Partner 1" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
            <motion.img 
              src="https://via.placeholder.com/150x50.png?text=Partner+2" 
              alt="Partner 2" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
            <motion.img 
              src="https://via.placeholder.com/150x50.png?text=Partner+3" 
              alt="Partner 3" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
            <motion.img 
              src="https://via.placeholder.com/150x50.png?text=Partner+4" 
              alt="Partner 4" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Meet the Team */}
        <div className="team-section">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>

          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/150x150.png?text=Jane+Doe" alt="CEO" />
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150x150.png?text=John+Smith" alt="CTO" />
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150x150.png?text=Emily+Johnson" alt="Lead Designer" />
              <h3>Emily Johnson</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150x150.png?text=Michael+Chen" alt="Lead Developer" />
              <h3>Michael Chen</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
