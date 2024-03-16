import React, { useState } from 'react';
import './Signup.css'; // Assuming you'll have similar styling with possible additions
import { useNavigate } from 'react-router-dom';

function Signup() {
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
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // const [username, setUsername] = useState('');
  // const [cardCVV, setCardCVV] = useState('');
  // const [cardAddress, setCardAddress] = useState('');
  // const [cardCity, setCardCity] = useState('');
  // const [cardState, setCardState] = useState('');
  // const [cardZipCode, setCardZipCode] = useState('');
  // const [shippingAddress, setShippingAddress] = useState('');
  // const [promotionSelection, setPromotionSelection] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Implement signup logic here
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
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
          zipCode: zipCode,
          email: email,
          confirmPassword: confirmPassword,
        })
      });
      
      if (response.ok) {
        const responseBody = await response.text();
        console.log(responseBody);
        console.log("Created user:", name);
        localStorage.setItem("userStatus","registered");
        navigate('/register-confirmation');
      } else {
        console.error('Signup failed:', response.status, response.statusText);
      }
  
    } catch (error) {
      console.error(error);
    }

    console.log('Signup attempt with:', name, email, password, confirmPassword);
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
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder='123-456-7890'
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <div id="promotions">
          <label>Sign Up For Promotions?</label> 
          <br />
          <label for="Yes">Yes</label>
          <input
            className="Promotions-Buttons"
            type="radio"
            id="Yes"
            value="Yes"
            name="promotions-choice"
            onChange={(e) => setIsSubscribed(e.target.value)}
          />
          <label for="no">No</label>
          <input
            className="Promotions-Buttons"
            type="radio"
            id="No"
            value="No"
            name="promotions-choice"
            onChange={(e) => setIsSubscribed(e.target.value)}
          />
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
            type="number"
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
            onChange={(e) => setCardType(e.target.value)}
            placeholder='Type in your card Type'
          />
        </div>

        <div className="input-group">
          <label htmlFor="cardExpiry">Expiry Date</label>
          <input
            type="month"
            id="cardExpiry"
            placeholder="MM/YY"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
          />
        </div>

        {/* <div className="input-group">
          <label htmlFor="cardCVV">CVV</label>
          <input
            type="text"
            id="cardCVV"
            value={cardCVV}
            onChange={(e) => setCardCVV(e.target.value)}
            placeholder='123'
          />
        </div> */}

        <div className="input-group">
          <label htmlFor="card-address">Billing Address</label>
          <input 
            type="text"
            id="card-address"
            value={billingAddr}
            onChange={(e) => setBillingAddr(e.target.value)}
            placeholder="1234 Main Street"
          />
        </div>

        {/* <div className="input-group">
          <label htmlFor="card-city">Billing City</label>
          <input 
            type="text"
            id="card-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Athens"
          />
        </div> */}

        {/* <div className="input-group">
          <label htmlFor="card-state">Billing State</label>
          <input 
            type="text"
            id="card-state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Georgia"
          />
        </div> */}

        {/* <div className="input-group">
          <label htmlFor="card-zip-code">Billing Zip Code</label>
          <input 
              type="number"
              id="card-zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="30604"
          />
        </div> */}

        <div className="actions">
            <a className = "Add-Card-Button" href="/register">Add Card</a>
        </div>
      </form>

      <form className='signup-form'>
        {/* Home Address */}
        <h3 className='category-label'>Enter Home Address Information</h3>
        
        {/* <div className="input-group">
          <label htmlFor="shippingAddress">Address</label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder='1234 Main Street'
          />
        </div> */}

        <div className="input-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder='S Lumpkin St'
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

        <div className='input-group'>
          <label htmlFor='state'>State</label>
          <input 
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder='Georgia'
            />
        </div>

        <div className="input-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
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
