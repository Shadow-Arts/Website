import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    // Validate token with backend
    const res = await fetch('http://localhost:5000/api/admin/validate-token', {
      method: 'POST',
      headers: { 'x-admin-token': token }
    });
    if (res.ok) {
      localStorage.setItem('adminToken', token);
      onLogin();
    } else {
      setError('Wrong admin token. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Admin Token"
        value={token}
        onChange={e => setToken(e.target.value)}
      />
      <button type="submit">Login as Admin</button>
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
    </form>
  );
};

export default AdminLogin;