import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    name: '',
    phone: '',
    address: '',
    img: null
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    if (!isAuthenticated || isAuthenticated !== "true") {
      navigate("/login");
      return;
    }

    setUserDetails(prev => ({
      ...prev,
      username: storedUsername || '',
      email: storedEmail || ''
    }));
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Save to localStorage or send to backend
    console.log("Updated details:", userDetails);
    alert("Profile updated!");
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>

      {!isEditing ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Full Name:</strong> {userDetails.name || 'Not Provided'}</p>
          <p><strong>Phone:</strong> {userDetails.phone || 'Not Provided'}</p>
          <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
          {userDetails.img && (
            <p><strong>Image:</strong><br />
              <img 
                src={URL.createObjectURL(userDetails.img)} 
                alt="Profile" 
                style={{ width: '100px', borderRadius: '50%' }} 
              />
            </p>
          )}
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} placeholder="Full Name" />
          <input type="tel" name="phone" value={userDetails.phone} onChange={handleChange} placeholder="Phone" />
          <input type="text" name="address" value={userDetails.address} onChange={handleChange} placeholder="Address" />
          <input type="file" name="img" accept="image/*" onChange={handleChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
