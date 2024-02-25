import React, { useState, useEffect } from 'react';
import './EditProfile.css'; // Assuming you have some CSS for styling

function EditProfile() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [city, setCity] = useState('');
const [cardType, setCardType] = useState('');
  const [zipCode, setZipCode] = useState('');
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


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
    <div class="container">
        <div className="edit-profile-container">
        <form className="edit-profile-form" onSubmit={handleProfileUpdate}>
        <div className="input-group">
          <label htmlFor="email">Phone Number</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>

        <div className="input-group">
          <label htmlFor="email">Name</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
            {/* Card Information */}
            <h3>Add Card Information</h3>
            <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            </div>
            <div className="input-group">
            <label htmlFor="cardType">Card Type</label>
            <input
                type="text"
                id="cardType"
                value={cardType}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            </div>
            <div className="input-group">
            <label htmlFor="cardExpiry">Expiry Date</label>
            <input
                type="text"
                id="cardExpiry"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
            />
            </div>
            <div className="input-group">
            <label htmlFor="cardCVV">CVV</label>
            <input
                type="text"
                id="cardCVV"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
            />
            </div>

            {/* Shipping Address */}
            <h3>Change Shipping Address</h3>
            <div className="input-group">
            <label htmlFor="shippingAddress">Address</label>
            <input
                type="text"
                id="shippingAddress"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
            />
            </div>
            <div className="input-group">
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            </div>
            <div className="input-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            </div>
            <div className="actions">
            <button type="submit">Update Profile</button>
            </div>
        </form>
        </div>
    </div>
  );
}

export default EditProfile;
