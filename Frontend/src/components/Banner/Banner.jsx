import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Banner.css';

const bannerData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dzyatxl5c/image/upload/v1753109683/Untitled_design_a7gvz0.jpg",
    // // isVideo: true,
    // title: "",
    // description: "Experience the beauty of every brushstroke come alive."
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1190200652/photo/the-painter-hands.jpg?s=612x612&w=0&k=20&c=ejXBjL330H0_i7O90UaRnMqP2G-ZQLgI4XBeXxweWss=",
    title: "Hands That Create",
    description: "Where passion meets texture on a living canvas."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dw1ajw27r/image/upload/v1750006906/13690689660_znwiwr.png",
    title: "Colors of Culture",
    description: "A celebration of tradition through intricate design."
  },
  {
    id: 4,
    image: "https://www.shutterstock.com/image-photo/talented-innovative-female-artist-draws-600nw-1540650017.jpg",
    title: "Inspired Interiors",
    description: "Bring soulful elegance to your living space."
  }
];


function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  const isMobile = window.innerWidth <= 768;

  const current = {
    ...bannerData[currentSlide],
    image:
      currentSlide === 0 && isMobile
        ? 'https://res.cloudinary.com/dzyatxl5c/image/upload/v1753110133/Untitled_design_1_qxrtuc.jpg'
        : bannerData[currentSlide].image
  };


  return (
    <section className="banner">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="banner-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          {current.isVideo ? (
            <video
              className="banner-media"
              src={current.image}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />
          ) : (
            <div
              className="banner-media"
              style={{
                backgroundImage: `url("${current.image}")`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0
              }}
            />
          )}
          {(current.title || current.description) && (
          <div className="banner-content" style={{ position: 'relative', zIndex: 1 }}>
            {current.title && <h1>{current.title}</h1>}
            {current.description && <p>{current.description}</p>}
          </div>
        )}

        </motion.div>
      </AnimatePresence>

      <button className="banner-nav banner-nav-left" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="banner-nav banner-nav-right" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="banner-dots">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;