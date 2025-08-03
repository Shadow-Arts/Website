import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = (useQuery().get('q') || '');
  const [results, setResults] = useState({ courses: [], events: [], gallery: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="search-results-container" style={{ padding: '2rem' }}>
      <h2>Search Results for "{query}"</h2>
      {loading && <p>Loading...</p>}

      <section>
        <h3>Courses</h3>
        <div className="courses-container">
          {results.courses.length > 0 ? (
            results.courses.map(course => (
              <div key={course._id} className="course-card">
                <img src={course.photo} alt={course.name} className="course-photo" />
                <div>
                  <h4>{course.name}</h4>
                  <p>{course.details}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No matching courses found.</p>
          )}
        </div>
      </section>

      <section>
        <h3>Events</h3>
        <div className="events-container">
          {results.events.length > 0 ? (
            results.events.map(event => (
              <div key={event._id} className="event-card">
                <img src={event.photo} alt={event.name} className="event-photo" />
                <div>
                  <h4>{event.name}</h4>
                  <p>{event.details}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No matching events found.</p>
          )}
        </div>
      </section>

      <section>
        <h3>Gallery</h3>
        <div className="gallery-container">
          {results.gallery.length > 0 ? (
            results.gallery.map(item => (
              <div key={item._id} className="gallery-card">
                <img src={item.image} alt={item.title} className="gallery-photo" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No matching gallery items found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchResults;