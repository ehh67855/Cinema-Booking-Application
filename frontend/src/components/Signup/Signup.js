import React, { useState } from 'react';
import './Signup.css'; // Assuming you'll have similar styling with possible additions
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cardType, setCardType] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Signup attempt with:', username, email, password, confirmPassword);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>
        <div className="input-group">
          <label htmlFor="email">Phone Number *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>

        <div className="input-group">
          <label htmlFor="email">Name *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password *</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <h3>Enter Card Information</h3>
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
        <h3>Enter Shipping Address</h3>
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

        </div>
        <div className="actions">
            <a className = "btn btn-primary" href="/register">Sign up</a>
        </div>
        <div className="login-link">
          Already registered? <a href="/login">Log in</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
