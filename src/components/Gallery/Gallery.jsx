import React from 'react';
import './Gallery.css';

const products = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Abstract Painting',
    description: 'A modern abstract piece of art.',
    price: '$150',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Landscape Painting',
    description: 'A beautiful landscape with vibrant colors.',
    price: '$200',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Portrait Artwork',
    description: 'A stunning portrait of a woman.',
    price: '$250',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Wildlife Art',
    description: 'A detailed wildlife painting.',
    price: '$180',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Modern Sculpture',
    description: 'A modern sculpture made with fine materials.',
    price: '$350',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvboUdHkrIdcw5ImR6m3fS07irIH85Mntw&s', // Replace with real image path
    title: 'Geometric Design',
    description: 'A geometric abstract design in vibrant colors.',
    price: '$120',
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Art Gallery</h2>
      <div className="gallery-container">
        {products.map((product) => (
          <div className="gallery-item" key={product.id}>
            <img src={product.image} alt={product.title} className="gallery-image" />
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">{product.title}</h3>
              <p className="gallery-item-description">{product.description}</p>
              <span className="gallery-item-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
