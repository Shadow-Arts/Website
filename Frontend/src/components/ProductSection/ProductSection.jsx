import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './ProductSection.css';

const products = {
  paintings: [
    {
      id: 1,
      name: "Little Hands, Big Art",
      image: "https://res.cloudinary.com/dzyatxl5c/image/upload/v1753088409/Screenshot_2025-07-21_142848_wz0rsq.png"
    },
    {
      id: 2,
      name: "Creative Bonds",
      image: "https://res.cloudinary.com/dzyatxl5c/image/upload/v1753088518/Screenshot_2025-07-21_143104_c2ey5k.png"
    },
    {
      id: 3,
      name: "Framed Moments",
      image: "https://res.cloudinary.com/dzyatxl5c/image/upload/v1753088641/Screenshot_2025-07-21_143301_evbdyo.png"
    },
    {
      id: 4,
      name: "Coastal Whispers",
      image: "https://res.cloudinary.com/dzyatxl5c/image/upload/v1753088808/Screenshot_2025-07-21_143556_byujmg.png"
    }
  ],
  crafts: [
    {
      id: 5,
      name: "Crafting Memories: A Father’s Reflection",
      type: "video",
      source: "https://res.cloudinary.com/dzyatxl5c/video/upload/v1753090724/WhatsApp_Video_2025-07-16_at_23.07.39_34807957_bcoqni.mp4"
    },
    {
      id: 6,
      name: "A moment of pride for our budding creators",
      type: "video",
      source: "https://res.cloudinary.com/dzyatxl5c/video/upload/v1753103679/WhatsApp_Video_2025-07-21_at_18.42.03_1ec44481_edirck.mp4"
    },
    {
      id: 7,
      name: "Family Threads: Creating Together with Shadow Arts",
      type: "video",
      source: "https://res.cloudinary.com/dzyatxl5c/video/upload/v1753090990/WhatsApp_Video_2025-07-07_at_21.04.48_f952f3a0_v3isaq.mp4"
    },
    {
      id: 8,
      name: "A journey of learning and self-expression",
      type: "video",
      source: "https://res.cloudinary.com/dzyatxl5c/video/upload/v1753116980/WhatsApp_Video_2025-07-21_at_19.50.48_a11005ad_lmyzv9.mp4"
    }
  ],
};

function ProductCard({ product }) {
  const isVideo = product.type === 'video';

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-image-container">
        {isVideo ? (
          <video
            className="product-video"
            src={product.source}
            muted
            playsInline
            loop
            preload="metadata"
            onMouseOver={(e) => {
              const video = e.target;
              if (video.readyState >= 2) {
                video.play().catch(() => {});
              } else {
                video.addEventListener('canplay', () => {
                  video.play().catch(() => {});
                }, { once: true });
              }
            }}
            onMouseOut={(e) => e.target.pause()}
          />
        ) : (
          <img src={product.image} alt={product.name} className="product-image" />
        )}

        <div className="product-actions">
          <button className="action-btn" title="Like this art"><Heart size={20} /></button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
      </div>
    </motion.div>
  );
}

function ProductSection() {
  return (
    <div className="product-sections">
      <section className="product-section">
        <h2>Highlights</h2>
        <div className="products-grid">
          {products.paintings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Crafts & Testimonials</h2>
        <div className="products-grid">
          {products.crafts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default ProductSection;
