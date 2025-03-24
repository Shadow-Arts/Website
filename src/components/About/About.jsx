import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion'; // For animations
>>>>>>> master
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
<<<<<<< HEAD
        <h1 className="about-title">About Us</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/about-us.jpg" alt="Our Team" />
          </div>
          
=======
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

>>>>>>> master
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, our company started with a simple vision: to create products that make a difference in people's lives. 
              What began as a small startup has grown into a passionate team dedicated to innovation and quality.
            </p>
<<<<<<< HEAD
            
=======

>>>>>>> master
            <h2>Our Mission</h2>
            <p>
              We strive to develop innovative solutions that combine cutting-edge technology with intuitive design. 
              Our mission is to provide products that are not only functional but also enhance the everyday experiences of our customers.
            </p>
<<<<<<< HEAD
            
            <h2>Our Values</h2>
            <ul className="about-values">
              <li><strong>Innovation:</strong> We constantly push boundaries to create new and better solutions.</li>
              <li><strong>Quality:</strong> We maintain the highest standards in everything we do.</li>
              <li><strong>Customer Focus:</strong> Our customers' needs drive our decisions and development.</li>
              <li><strong>Sustainability:</strong> We're committed to environmentally responsible practices.</li>
            </ul>
          </div>
        </div>
        
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/team/ceo.jpg" alt="CEO" />
=======

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
>>>>>>> master
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
<<<<<<< HEAD
              <img src="/images/team/cto.jpg" alt="CTO" />
=======
              <img src="https://via.placeholder.com/150x150.png?text=John+Smith" alt="CTO" />
>>>>>>> master
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
<<<<<<< HEAD
              <img src="/images/team/designer.jpg" alt="Lead Designer" />
=======
              <img src="https://via.placeholder.com/150x150.png?text=Emily+Johnson" alt="Lead Designer" />
>>>>>>> master
              <h3>Emily Johnson</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-member">
<<<<<<< HEAD
              <img src="/images/team/developer.jpg" alt="Lead Developer" />
=======
              <img src="https://via.placeholder.com/150x150.png?text=Michael+Chen" alt="Lead Developer" />
>>>>>>> master
              <h3>Michael Chen</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> master
