import React, { useEffect, useState } from 'react';
import './AdminGallery.css';

const API_URL = 'https://website-mrlr.onrender.com/api/gallery';

const initialForm = {
  image: '',
  title: '',
  description: '',
  price: '',
  medium: '',
  category: '',
};

const defaultCategories = [
  'Divine Portrait',
  'Human Portrait',
  'Realistic Art',
  'Animal Portrait',
  'Coloured Art',
  'Student Works',
  'Other'
];

const AdminGallery = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [customCategory, setCustomCategory] = useState('');

  const adminToken = localStorage.getItem('adminToken');

  // Fetch gallery items
  const fetchItems = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load gallery items.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Handle select and input changes
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'category') {
      if (value === 'Other') {
        setCustomCategory('');
        setForm({ ...form, category: '' }); // Clear category until user types
      } else {
        setCustomCategory('');
        setForm({ ...form, category: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCustomCategoryChange = e => {
    setCustomCategory(e.target.value);
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    // If "Other" is selected but no custom category, prevent submit
    if (
      (!form.category || form.category.trim() === '') &&
      customCategory.trim() === ''
    ) {
      setError('Please enter a category.');
      return;
    }

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
        throw new Error(data.error || 'Failed to save gallery item');
      }
      setMessage(editId ? 'Gallery item updated successfully!' : 'Gallery item added successfully!');
      setForm(initialForm);
      setEditId(null);
      setCustomCategory('');
      fetchItems();
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleEdit = item => {
    setEditId(item._id);
    if (defaultCategories.includes(item.category)) {
      setForm({
        image: item.image || '',
        title: item.title || '',
        description: item.description || '',
        price: item.price || '',
        medium: item.medium || '',
        category: item.category || '',
      });
      setCustomCategory('');
    } else {
      setForm({
        image: item.image || '',
        title: item.title || '',
        description: item.description || '',
        price: item.price || '',
        medium: item.medium || '',
        category: item.category || '',
      });
      setCustomCategory(item.category || '');
    }
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
        throw new Error(data.error || 'Failed to delete gallery item');
      }
      setMessage('Gallery item deleted successfully!');
      setItems(items.filter(i => i._id !== id));
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm(initialForm);
    setCustomCategory('');
    setMessage('');
    setError('');
  };

  // For select, show "Other" if not in defaultCategories
  const selectCategoryValue =
    form.category && !defaultCategories.includes(form.category)
      ? 'Other'
      : form.category;

  return (
    <div className="admin-gallery-container">
      <h2>Admin Gallery Management</h2>
      {message && <div style={{ color: 'green', marginBottom: '1rem' }}>{message}</div>}
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form className="admin-gallery-form" onSubmit={handleSubmit}>
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="medium" placeholder="Medium" value={form.medium} onChange={handleChange} />
        <select
          name="category"
          value={selectCategoryValue || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {defaultCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        {selectCategoryValue === 'Other' && (
          <input
            name="customCategory"
            placeholder="Enter new category"
            value={customCategory}
            onChange={handleCustomCategoryChange}
            required
          />
        )}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" disabled={submitting}>
            {editId ? 'Update' : 'Add'} Gallery Item
          </button>
          {editId && (
            <button type="button" onClick={handleCancelEdit} disabled={submitting}>
              Cancel
            </button>
          )}
        </div>
      </form>
      {loading ? (
        <p>Loading gallery items...</p>
      ) : (
        <ul className="admin-gallery-list">
          {items.map(item => (
            <li key={item._id}>
              <span>
                <b>{item.title || '[No Title]'}</b>
              </span>
              <span>
                <button onClick={() => handleEdit(item)} disabled={submitting}>Edit</button>
                <button onClick={() => handleDelete(item._id)} disabled={submitting}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminGallery;