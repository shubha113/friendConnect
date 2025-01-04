// src/pages/Profile.jsx
import { useState } from 'react';
import '../styles/profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Love connecting with new people!',
    location: 'New York, USA',
    interests: ['Reading', 'Music', 'Travel']
  });

  const [editForm, setEditForm] = useState({ ...userData });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(editForm);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (e) => {
    setEditForm({
      ...editForm,
      interests: e.target.value.split(',').map(interest => interest.trim())
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">{userData.name.charAt(0)}</div>
        <h1>{userData.name}</h1>
        <p className="username">@{userData.username}</p>
      </div>

      {!isEditing ? (
        <div className="profile-info">
          <div className="info-section">
            <h3>About Me</h3>
            <p>{userData.bio}</p>
          </div>

          <div className="info-section">
            <h3>Location</h3>
            <p>{userData.location}</p>
          </div>

          <div className="info-section">
            <h3>Interests</h3>
            <div className="interests-list">
              {userData.interests.map((interest, index) => (
                <span key={index} className="interest-tag">{interest}</span>
              ))}
            </div>
          </div>

          <button 
            className="edit-profile-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={editForm.bio}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={editForm.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Interests (comma-separated)</label>
            <input
              type="text"
              name="interests"
              value={editForm.interests.join(', ')}
              onChange={handleInterestChange}
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-btn">Save Changes</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setEditForm({ ...userData });
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;