import React, { useEffect, useState } from 'react';
import './Courses.css';

const categories = [
  'Classes',
  'Summer Camps',
  'Kalaraambam',
  'School Academic Course',
  'Online Workshops'
];

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  const openModal = course => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="courses-main-container">
      <h2 className="courses-category-title">Courses</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map(category => {
          const filtered = courses.filter(c => c.category === category);
          if (filtered.length === 0) return null;
          return (
            <div key={category} className="courses-category-group">
              <h3 className="courses-category-heading">{category}</h3>
              <div className="courses-container">
                {filtered.map(course => (
                  <div key={course._id} className="course-card">
                    <img src={course.photo} alt={course.name} className="course-photo" />
                    <h3 className="course-name">{course.name}</h3>
                    <div className="course-details">
                      <p>
                        {course.details.length > 100
                          ? course.details.slice(0, 100) + '...'
                          : course.details}
                      </p>
                      {course.location && <p><b>Location:</b> {course.location}</p>}
                      {course.timings && <p><b>Timings:</b> {course.timings}</p>}
                    </div>
                    <button
                      className="see-more-button"
                      onClick={() => openModal(course)}
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

      {/* Modal for full course details */}
      {showModal && selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <img src={selectedCourse.photo} alt={selectedCourse.name} className="modal-course-photo" />
            <h2>{selectedCourse.name}</h2>
            <p><b>Category:</b> {selectedCourse.category}</p>
            <p><b>Status:</b> {selectedCourse.status}</p>
            <p><b>Description:</b> {selectedCourse.details}</p>
            {selectedCourse.location && <p><b>Location:</b> {selectedCourse.location}</p>}
            {selectedCourse.timings && <p><b>Timings:</b> {selectedCourse.timings}</p>}
            {selectedCourse.status === 'upcoming' && selectedCourse.register && (
              <a
                href={selectedCourse.register}
                className="register-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            )}
            {selectedCourse.status === 'previous' && (
              <>
                {selectedCourse.highlights && (
                  <a
                    href={selectedCourse.highlights}
                    className="view-highlights-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Highlights
                  </a>
                )}
                {selectedCourse.feedback && (
                  <div className="course-feedback">
                    <b>Participants Feedback:</b>
                    <p>{selectedCourse.feedback}</p>
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

export default Courses;