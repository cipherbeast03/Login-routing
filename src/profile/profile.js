import React from 'react';
import './profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />
        </div>
        <h2>John Doe</h2>
        <p>Frontend Developer</p>
        <p>
          Passionate about building amazing web experiences and exploring new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
