import React, { useEffect, useState } from 'react';
import './AdminCourses.css';

const API_URL = 'http://localhost:5000/api/courses';

const categories = [
  'Classes',
  'Summer Camps',
  'Kalaraambam',
  'School Academic Course',
  'Online Workshops'
];

const initialForm = {
  name: '',
  details: '',
  photo: '',
  category: '',
  status: '',
  location: '',
  timings: '',
  register: '',
  highlights: '',
  feedback: '',
};

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const adminToken = localStorage.getItem('adminToken');

  // Fetch courses
  const fetchCourses = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load courses.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');
    setSubmitting(true);
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;
    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify(form)
      });
      if (res.status === 403) {
        localStorage.removeItem('adminToken');
        window.location.reload();
        return;
      }
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save course');
      }
      setMessage(editId ? 'Course updated successfully!' : 'Course added successfully!');
      setForm(initialForm);
      setEditId(null);
      fetchCourses();
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleEdit = course => {
    setEditId(course._id);
    setForm({
      name: course.name || '',
      details: course.details || '',
      photo: course.photo || '',
      category: course.category || '',
      status: course.status || '',
      location: course.location || '',
      timings: course.timings || '',
      register: course.register || '',
      highlights: course.highlights || '',
      feedback: course.feedback || '',
    });
    setMessage('');
    setError('');
  };

  const handleDelete = async id => {
    setMessage('');
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': adminToken }
      });
      if (res.status === 403) {
        localStorage.removeItem('adminToken');
        window.location.reload();
        return;
      }
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete course');
      }
      setMessage('Course deleted successfully!');
      setCourses(courses.filter(c => c._id !== id));
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm(initialForm);
    setMessage('');
    setError('');
  };

  return (
    <div className="admin-courses-container">
      <h2>Admin Course Management</h2>
      {message && <div style={{ color: 'green', marginBottom: '1rem' }}>{message}</div>}
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form className="admin-course-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Title" value={form.name} onChange={handleChange} required />
        <textarea name="details" placeholder="Description" value={form.details} onChange={handleChange} required />
        <input name="photo" placeholder="Poster Image URL" value={form.photo} onChange={handleChange} required />
        <select
          name="category"
          value={form.category || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          name="status"
          value={form.status || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="previous">Previous</option>
        </select>
        <input name="location" placeholder="Location" value={form.location || ''} onChange={handleChange} />
        <input name="timings" placeholder="Timings" value={form.timings || ''} onChange={handleChange} />
        {form.status === 'upcoming' && (
          <input name="register" placeholder="Google Form Embed Link" value={form.register || ''} onChange={handleChange} />
        )}
        {form.status === 'previous' && (
          <>
            <input name="highlights" placeholder="Highlights Link" value={form.highlights || ''} onChange={handleChange} />
            <textarea name="feedback" placeholder="Participants Feedback" value={form.feedback || ''} onChange={handleChange} />
          </>
        )}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" disabled={submitting}>
            {editId ? 'Update' : 'Add'} Course
          </button>
          {editId && (
            <button type="button" onClick={handleCancelEdit} disabled={submitting}>
              Cancel
            </button>
          )}
        </div>
      </form>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <ul className="admin-courses-list">
          {courses.map(course => (
            <li key={course._id}>
              <span>
                <b>{course.name}</b> ({course.category} - {course.status})
              </span>
              <span>
                <button onClick={() => handleEdit(course)} disabled={submitting}>Edit</button>
                <button onClick={() => handleDelete(course._id)} disabled={submitting}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminCourses;