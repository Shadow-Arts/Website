import React, { useEffect, useState } from 'react';
import './AdminEvents.css';

const API_URL = 'http://localhost:5000/api/events';

const initialForm = {
  name: '',
  details: '',
  photo: '',
  mainCategory: '',
  status: '',
  location: '',
  timings: '',
  register: '',
  highlights: '',
  feedback: '',
};

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const adminToken = localStorage.getItem('adminToken');

  // Fetch events
  const fetchEvents = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load events.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
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
        throw new Error(data.error || 'Failed to save event');
      }
      setMessage(editId ? 'Event updated successfully!' : 'Event added successfully!');
      setForm(initialForm);
      setEditId(null);
      fetchEvents();
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleEdit = event => {
    setEditId(event._id);
    setForm({
      name: event.name || '',
      details: event.details || '',
      photo: event.photo || '',
      mainCategory: event.mainCategory || '',
      status: event.status || '',
      location: event.location || '',
      timings: event.timings || '',
      register: event.register || '',
      highlights: event.highlights || '',
      feedback: event.feedback || '',
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
        throw new Error(data.error || 'Failed to delete event');
      }
      setMessage('Event deleted successfully!');
      setEvents(events.filter(e => e._id !== id));
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
    <div className="admin-events-container">
      <h2>Admin Event Management</h2>
      {message && <div style={{ color: 'green', marginBottom: '1rem' }}>{message}</div>}
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form className="admin-event-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Title" value={form.name} onChange={handleChange} required />
        <textarea name="details" placeholder="Description" value={form.details} onChange={handleChange} required />
        <input name="photo" placeholder="Poster Image URL" value={form.photo} onChange={handleChange} required />
        <select
          name="mainCategory"
          value={form.mainCategory || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Main Category</option>
          <option value="Workshops">Workshops</option>
          <option value="Competitions">Competitions</option>
          <option value="Programmes">Programmes</option>
          <option value="Projects">Projects</option>
          <option value="Lives">Lives</option>
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
            {editId ? 'Update' : 'Add'} Event
          </button>
          {editId && (
            <button type="button" onClick={handleCancelEdit} disabled={submitting}>
              Cancel
            </button>
          )}
        </div>
      </form>
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul className="admin-events-list">
          {events.map(event => (
            <li key={event._id}>
              <span>
                <b>{event.name}</b> ({event.mainCategory} - {event.status})
              </span>
              <span>
                <button onClick={() => handleEdit(event)} disabled={submitting}>Edit</button>
                <button onClick={() => handleDelete(event._id)} disabled={submitting}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminEvents;