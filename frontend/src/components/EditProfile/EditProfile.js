import React, { useState, useEffect } from 'react';
import './EditProfile.css'; // Assuming you have some CSS for styling

function EditProfile() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Here you would fetch the current user's profile data from your backend and set the state
    // For demonstration, using placeholder values
    setName('John Doe'); // Placeholder name
    setIsSubscribed(true); // Placeholder subscription status
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Implement the logic to update the profile here
    // This would typically involve sending a request to your backend API
    console.log('Profile updated with:', name, password, isSubscribed);
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-form" onSubmit={handleProfileUpdate}>
        <h2>Edit Profile</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">New Password (leave blank to keep current)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            id="subscribe"
            checked={isSubscribed}
            onChange={(e) => setIsSubscribed(e.target.checked)}
          />
          <label htmlFor="subscribe">Subscribe to promotions</label>
        </div>
        <div className="actions">
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
