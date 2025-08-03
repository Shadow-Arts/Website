import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const partnerLogos = [
  {
    name: 'CBIT',
    logo: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753114934/event-post_kr4ho1.jpg',
  },
  {
    name: 'Pedilite industries Limited',
    logo: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753115929/download_kn9qye.png',
  },
  {
    name: 'Vaagdevi College of Engineering',
    logo: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753116187/1715248407phprMZhIB_igbksm.jpg',
  },
  {
    name: 'SR University',
    logo: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753116300/download_hhzegu.jpg',
  },
];


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.h1
          className="about-title gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Shadow Arts
        </motion.h1>

        {/* Creative Image and Stats */}
        <div className="about-hero">
          <motion.img
            src="https://res.cloudinary.com/dw1ajw27r/image/upload/v1750178199/pngtree-group-of-successful-young-people-formal-teamwork-coworkers-photo-image_42157746_y7yynw.jpg"
            alt="Our Team"
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div className="hero-stats">
            {[
              { icon: '👥', count: '500+', label: 'Active Artists' },
              { icon: '🎨', count: '2,000+', label: 'Artworks' },
              { icon: '🏅', count: '150+', label: 'Exhibitions' },
              { icon: '❤️', count: '10K+', label: 'Art Lovers' },
            ].map((stat, idx) => (
              <motion.div className="stat-card" key={idx} whileHover={{ scale: 1.05 }}>
                <div className="icon">{stat.icon}</div>
                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{stat.count}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-sections">
          {/* Story, Mission, Values */}
          <motion.div className="info-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2>Our Story</h2>
            <p>
              Shadow Arts was born from a vision to regenerate lives through creativity. Since our inception, we have dedicated ourselves to empowering children, students, and women through hands-on, therapeutic art programs, preserving our cultural heritage.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe art should transcend galleries and become a part of daily life. Our mission is to ignite creativity in everyone, nurturing confidence, emotional well-being, and lifelong artistic skills.
            </p>

            <h2>Our Values</h2>
            <ul className="highlight-list">
              <li><strong>Empowerment:</strong> Uplifting through skill-building & creativity.</li>
              <li><strong>Creativity:</strong> Innovation, healing, transformation.</li>
              <li><strong>Community:</strong> Inclusive, nurturing environments.</li>
              <li><strong>Culture:</strong> Honoring traditional expressions.</li>
            </ul>
          </motion.div>

          {/* Why We Conduct Events */}
          <motion.div className="info-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2>Why We Conduct Events</h2>
            <ul className="highlight-list">
              <li><strong>Skill Development:</strong> Unlock creative potential through hands-on practice.</li>
              <li><strong>Therapeutic Benefits:</strong> Promote well-being and mindfulness through art.</li>
              <li><strong>Fun & Engagement:</strong> Meaningful and memorable activities.</li>
              <li><strong>Skillful Enjoyment:</strong> Learn through joyful exploration.</li>
            </ul>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div className="testimonials-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="testimonials">
            {[
              {
                text: 'Shadow Arts\' creative kits and workshops made my child more imaginative and screen-free — truly a refreshing initiative!',
                author: 'Anitha, Parent'
              },
              {
                text: 'Partnering with Shadow Arts brought an engaging, meaningful experience to our college students. Highly recommended.',
                author: 'CBIT College Coordinator'
              },
            ].map((t, idx) => (
              <motion.div className="testimonial-card" key={idx} whileHover={{ scale: 1.05 }}>
                <p>"{t.text}"</p>
                <h4>- {t.author}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborators */}
        <motion.div className="partners-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Our Collaborators & MOU Partners</h2>
          <div className="partners-logos">
            {partnerLogos.map((partner, i) => (
              <motion.img
                key={i}
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>


        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-heading">Meet Our Team</h2>
          <div className="team-grid">
            {[
              { name: 'Arun Kumar Parakala', title: 'Founder & CEO', image: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753111890/Screenshot_2025-07-21_210015_rux7g0.png' },
              { name: 'Chandana', title: 'Chief Creative Officer & Managing Director', image: 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753340997/WhatsApp_Image_2025-07-22_at_07.13.27_c743dedb_za7frp.jpg' },
            ].map((member, idx) => (
              <div className="team-member" key={idx}>
                <img src={member.image} alt={member.name} />
                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="campus-ambassadors-section">
          <h2 className="section-heading">Campus Ambassadors</h2>
          <p>
            We proudly collaborate with passionate student ambassadors who spread creativity and build vibrant communities.
          </p>
          {/* <div className="ambassadors-list">
            {[
              { name: 'Priya Sharma', college: 'XYZ College of Arts' },
              { name: 'Rahul Verma', college: 'ABC Institute of Design' },
              { name: 'Sneha Patel', college: 'LMN University' },
            ].map((amb, idx) => (
              <div className="ambassador-card" key={idx}>
                <img src={`https://via.placeholder.com/100x100.png?text=${amb.name.split(' ')[0]}`} alt={amb.name} />
                <div>
                  <h4>{amb.name}</h4>
                  <p>{amb.college}</p>
                </div>
              </div>
            ))}
          </div> */}
          <p style={{ marginTop: '1rem' }}>
            Interested in joining us? <Link to="/contact" className="contact-link">Become an Ambassador</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;