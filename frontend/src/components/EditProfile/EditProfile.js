import React, { useState, useEffect } from 'react';
import './EditProfile.css'; // Assuming you have some CSS for styling
import CardsContainer from './CardsContainer';

function EditProfile() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);
  
  const fetchCards = async () => {
    //Implementation for getting the list of the user's payment cards from the database
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [billingAddr, setBillingAddr] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cardType, setCardType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/editProfile', {
        method: 'POST', //because this is an update to information in the database, should this be PUT?
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name, 
          password: password,
          isSubscribed: isSubscribed,
          phoneNumber: phoneNumber,
          cardNumber: cardNumber,
          cardExpiry: cardExpiry,
          billingAddr: billingAddr,
          street: street,
          city: city,
          state: state,
          cardType: cardType,
          zipCode: zipCode
        })
      });
      
      if (response.ok) {
        const responseBody = await response.text();
        console.log(responseBody);
        console.log('Profile updated with:', name, password, isSubscribed);
      } else {
        console.error('Profile edit failed:', response.status, response.statusText);
      }
  
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="container">
      <div className="edit-profile-container">
        <form className="edit-profile-form" onSubmit={handleProfileUpdate}>
          <h3>Edit User Information</h3>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="subscribe">Subscribe to promotions</label>
            <input
              type="checkbox"
              id="subscribe"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
            />
          </div>
          {/* Card Information */}
          <h3>Add Card Information</h3>
          <div className="input-group">
            <label htmlFor="cardType">Card Type</label>
            <input
              type="text"
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            />
          </div>
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
            <label htmlFor="billingAddr">Billing Address</label>
            <input
              type="text"
              id="billingAddr"
              value={billingAddr}
              onChange={(e) => setBillingAddr(e.target.value)}
            />
          </div>
          {/* List of User's Payment Cards */}
          <h4>Your Cards:</h4>
          <CardsContainer cards={cards} />
          {/* Home Address */}
          <h3>Change Home Address Information</h3>
          <div className="input-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
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
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
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
