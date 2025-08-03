import React, { useEffect, useState } from 'react';
import './Events.css';

const categories = [
  'Workshops',
  'Competitions',
  'Programmes',
  'Projects',
  'Lives'
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const openPopup = event => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-main-container">
      <h2 className="events-category-title">Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map(category => {
          const filtered = events.filter(e => e.mainCategory === category);
          if (filtered.length === 0) return null;
          return (
            <div key={category} className="events-category-group">
              <h3 className="events-category-heading">{category}</h3>
              <div className="events-container">
                {filtered.map(event => (
                  <div key={event._id} className="event-card">
                    <img src={event.photo} alt={event.name} className="event-photo" />
                    <h3 className="event-name">{event.name}</h3>
                    <div className="event-details">
                      <p>
                        {event.details && event.details.length > 100
                          ? event.details.slice(0, 100) + '...'
                          : event.details}
                      </p>
                      {event.location && <p><b>Location:</b> {event.location}</p>}
                      {event.timings && <p><b>Timings:</b> {event.timings}</p>}
                    </div>
                    <button
                      className="see-more-button"
                      onClick={() => openPopup(event)}
                    >
                      See More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      {showPopup && selectedEvent && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closePopup}>×</button>
            <img src={selectedEvent.photo} alt={selectedEvent.name} className="modal-course-photo" />
            <h2>{selectedEvent.name}</h2>
            <p><b>Category:</b> {selectedEvent.mainCategory}</p>
            <p><b>Status:</b> {selectedEvent.status}</p>
            <p><b>Description:</b> {selectedEvent.details}</p>
            {selectedEvent.location && <p><b>Location:</b> {selectedEvent.location}</p>}
            {selectedEvent.timings && <p><b>Timings:</b> {selectedEvent.timings}</p>}
            {selectedEvent.status === 'upcoming' && selectedEvent.register && (
              <a
                href={selectedEvent.register}
                className="register-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            )}
            {selectedEvent.status === 'previous' && (
              <>
                {selectedEvent.highlights && (
                  <a
                    href={selectedEvent.highlights}
                    className="view-highlights-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Highlights
                  </a>
                )}
                {selectedEvent.feedback && (
                  <div className="event-feedback">
                    <b>Participants Feedback:</b>
                    <p>{selectedEvent.feedback}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;