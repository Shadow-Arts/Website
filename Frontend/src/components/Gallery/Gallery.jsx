import React, { useEffect, useState } from 'react';
import './Gallery.css';

const categories = [ 'Divine Portrait', 'Human Portrait', 'Realistic Art', 'Animal Portrait', 'Coloured Art','Student Works' ];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Art Gallery</h2>
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className="gallery-container">
        {loading ? (
          <p>Loading...</p>
        ) : filteredProducts.map(product => (
          <div className="gallery-item" key={product._id}>
            <img src={product.image} alt={product.title} className="gallery-image" />
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">{product.title}</h3>
              <p className="gallery-item-description">{product.description}</p>
              <span>Medium : {product.medium}</span>
              <span className="gallery-item-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;