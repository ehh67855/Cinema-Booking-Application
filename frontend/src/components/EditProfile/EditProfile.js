import React, { useState, useEffect } from 'react';
import './EditProfile.css'; // Assuming you have some CSS for styling
import CardsContainer from './CardsContainer';

function EditProfile() {

  const [userData,setUserData] = useState();

  useEffect(() => {
    fetchUserData();
  }, []);


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState();
  const [cardExpiry, setCardExpiry] = useState('');
  const [billingAddr, setBillingAddr] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cardType, setCardType] = useState('');
  const [zipCode, setZipCode] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  const [cards, setCards] = useState(
    []
    // [
    //   // These are dummy payment cards.
    //   {cardType: "Visa", cardNumber: "69", expirationDate: "10/1984", billingAdress: "1111 Rock Dr"},
    //   {cardType: "Visa", cardNumber: "420", expirationDate: "10/1984", billingAdress: "1111 Rock Dr"},
    //   {cardType: "Visa", cardNumber: 56, expirationDate: "10/1984", billingAdress: "1111 Rock Dr"}
    // ]
  );

  const fetchUserData = async () => {
    const username = localStorage.getItem("username");
    if (!username) {
      console.error('Username is not stored in localStorage');
      return;
    }

    const encodedUsername = encodeURIComponent(username);
    const url = `http://localhost:8080/api/auth/get-user?username=${encodedUsername}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
        setName(userData.name);
        setIsSubscribed(userData.promotionsEnabled);
        setPhoneNumber(userData.phoneNumber);
        setStreet(userData.homeAddress.adress);
        setCity(userData.homeAddress.city);
        setState(userData.homeAddress.state);
        setZipCode(userData.homeAddress.zipcode);
        // This gets the user's real card(s)
        if(!(userData.creditCards == null)){
          setCards(userData.creditCards);
        }
      } else {
        console.error('Error fetching user: HTTP status ', response.status);
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  }

  
  

  const handleCardUpdate = async (e) => {
    e.preventDefault();
    if(cards.length == 3){
      alert('A user can only have a max of 3 payment cards.');
    }else{
      try {
        const response = await fetch('http://localhost:8080/api/editProfile', {
          method: 'POST', //because this is an update to information in the database, should this be PUT?
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cardType: cardType,
            cardNumber: cardNumber,
            expirationDate: cardExpiry,
            billingAdress: billingAddr,
          })
        });

        if (response.ok) {
          const responseBody = await response.text();
          console.log(responseBody);
          console.log('Card added:', cardType, cardNumber, cardExpiry, billingAddr);
        } else {
          console.error('Card addition failed:', response.status, response.statusText);
        }
      
      } catch (error) {
        console.error(error);
      }
    }
  }

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
          adress: street,
          city: city,
          state: state,
          zipcode: zipCode,
          isAdmin: isAdmin,
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

  function AdminSet() {
    if(localStorage.getItem("userStatus") === "admin") {
      return (
        <div className="input-group">
          <label htmlFor="adminSet">Give Admin Status</label>
          <input
            type="checkbox"
            id="adminSet"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </div>
      )
    }
  }

  return (
    <div className='edit-profile-container'>
    <div class="container">
      <div className="edit-profile-container">
        <form className="edit-profile-form" onSubmit={handleProfileUpdate}>
          {console.log(userData)}
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
            <label htmlFor="password">New Password (do not change to keep current)</label>
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
              type="tel"
              inputMode='numeric'
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
          {/* Conditionally Rendered Admin Setting */}
          <AdminSet />
          {/* Card Information */}
          
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
              type="number"
              inputMode='numeric'
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
    <form onSubmit={handleCardUpdate}>
    <h3>Add Card Information</h3>
    <div className="input-group">
      <label htmlFor="cardType">Card Type</label>
      <input
        type="text"
        id="cardType"
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="number"
        inputMode='numeric'
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      <label htmlFor="cardExpiry">Expiration Date</label>
      <input
        type="month"
        id="cardExpiry"
        placeholder="MM/YY"
        value={cardExpiry}
        onChange={(e) => setCardExpiry(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      <label htmlFor="billingAddr">Billing Address</label>
      <input
        type="text"
        id="billingAddr"
        value={billingAddr}
        onChange={(e) => setBillingAddr(e.target.value)}
        required
      />
    </div>
    <button type='submit'>Add Card</button>
  </form>
  </div>
  );
}

export default EditProfile;