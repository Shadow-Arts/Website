// src/components/Events/EventCard.jsx
import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => setShowDetails(true);
  const handleClose = () => setShowDetails(false);

  return (
    <div className="event-card">
      <img src={event.photo} alt={event.name} className="event-photo" />
      <h3 className="event-name">{event.name}</h3>
      <button className="details-button" onClick={handleDetailsClick}>
        View Details
      </button>

      {showDetails && (
        <div className="event-popup" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{event.name}</h2>
            <p>{event.details}</p>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
