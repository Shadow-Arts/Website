import React, { useEffect, useState } from 'react';

const API_URL = 'https://website-mrlr.onrender.com/api/admin/dashboard';

const AdminDashboard = () => {
  const [sections, setSections] = useState([]);
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    fetch(API_URL, {
      headers: { 'x-admin-token': adminToken }
    })
      .then(res => res.json())
      .then(data => setSections(data.sections || []));
  }, [adminToken]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {sections.map(section => (
          <li key={section.name}>
            <a href={section.path}>{section.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;