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
      <h2 id="signup-label">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
      <h3 className="category-label">Personal Information</h3>
        <div className="input-group">
          <br/>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='example@gmail.com'
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
            placeholder='123-456-7890'
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
            placeholder='Bob Jones'
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
            placeholder='Enter a password'
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
            placeholder='Retype your password'
          />
        </div>
        <div className='input-group'>
          <label>Sign Up For Promotions?</label>
          <label for="Yes">Yes</label>
          <input type="radio" id="Yes" value="Yes" name="promotions-choice"/>
          <label for="no">No</label>
          <input type="radio" id="No" value="No" name="promotions-choice"/>
        </div>
        <div className="actions">
            <a className = "btn btn-primary" href="/register">Sign up</a>
        </div>
        <div className="login-link">
          Already registered? <a href="/login">Log in</a>
        </div>
      </form>



      <form className="signup-form">
      <h3 className="category-label">Enter Card Information</h3>
        <div className="input-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder='12345678910123456'
        />
        </div>
        <div className="input-group">
            <label htmlFor="cardType">Card Type</label>
            <input
                type="text"
                id="cardType"
                value={cardType}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder='Type in your card Type'
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
            placeholder='123'
        />
        </div>
        <div className="actions">
            <a className = "Add-Card-Button" href="/register">Add Card</a>
        </div>
        </form>



        <form className='signup-form'>
        {/* Shipping Address */}
        <h3 className='category-label'>Enter Shipping Address</h3>
        <div className="input-group">
        <label htmlFor="shippingAddress">Address</label>
        <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder='1234 Main Street'
        />
        </div>
        <div className="input-group">
        <label htmlFor="city">City</label>
        <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Athens'
        />
        </div>
        <div className="input-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder='30604'
        />
        </div>
        <div className="actions">
            <a className = "Add-Address-Button" href="/register">Add Address</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
