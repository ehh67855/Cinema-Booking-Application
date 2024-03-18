import React, { useState } from 'react';
import './Signup.css'; // Assuming you'll have similar styling with possible additions
import { useNavigate } from 'react-router-dom';

function Signup() {
  // personal info
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // misc info
  const [isSubscribed, setIsSubscribed] = useState(false);
  // card info
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [billingAddr, setBillingAddr] = useState('');
  // home address info
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if(!(cardNumber == "" && cardType == "" && cardExpiry == "" && billingAddr == "") && !(cardNumber != "" && cardType != "" && cardExpiry != "" && billingAddr != "")) {
      alert("Please fill out all card fields when entering in new card.");
    } else if(password != confirmPassword) {
      alert("Password and Confirm Password do not match.");
    } else {
      postUser();
    }
  };

  const postUser = async () => {
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
          street: street,
          city: city,
          state: state,
          zipCode: zipCode,
          email: email,
        })
      });

      // creates a card for a user if they enter the info for a card
      if(cardNumber != "") {
        const cardResponse = await fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cardNumber: cardNumber,
            cardType: cardType,
            cardExpiry: cardExpiry,
            billingAddr: billingAddr,
          })
        });
      
        if(cardResponse.ok) {
          const cardResponseBody = await cardResponse.text();
          console.log(cardResponseBody);
          console.log("Created new card");
        } else {
          console.error('Card info inputing failed:', cardResponse.status, cardResponse.statusText);
        }
      }

      if (response.ok) {
        const responseBody = await response.text();
        console.log(responseBody);
        console.log("Created user:", name);
        localStorage.setItem("userStatus","registered");
        localStorage.setItem("username", email);
        navigate('/register-confirmation');
      } else {
        console.error('Signup failed:', response.status, response.statusText);
        alert("email already in use");
      }
  
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="signup-container">
      <h2 id="signup-label">Sign Up</h2>

      <form>
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
          <label htmlFor="phone">Phone Number *</label>
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
          <label htmlFor="name">Name *</label>
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
        <br />
        <h3 className="category-label">Enter Card Information (Optional)</h3>

        <div className="input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="number"
            inputMode='numeric'
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
        <br />
        {/* Home Address */}
        <h3 className='category-label'>Enter Home Address Information (Optional)</h3>

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
            inputMode='numeric'
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder='30604'
          />
        </div>

        <div className="actions">
            <a className = "btn btn-primary" onClick={handleSignup}>Sign up</a>
        </div>
        <div className="login-link">
          Already registered? <a href="/login">Log in</a>
        </div>
        </form>
    </div>
  );
}

export default Signup;
