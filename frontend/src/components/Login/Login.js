import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, 
        password: password,
      })
    });
    
    if (response.ok) {
      const responseBody = await response.text();
      console.log("isAdmin", responseBody); 
      responseBody === "true" ? localStorage.setItem("userStatus","admin") : localStorage.setItem("userStatus","registered");
      localStorage.setItem("username", username);
      if (localStorage.getItem('userStatus') === "admin") {
        navigate('/adminMainPage');
      } else {
        navigate('/'); // Redirects to the root route without reloading the page
      }
    } else {
      console.error('Login failed:', response.status, response.statusText);
    }

  } catch (error) {
    console.error(error);
  }
}


  return (
    <div className="login-container">
      <div id="login-banner">Login</div>
      <form className="login-form" onSubmit={handleLogin}>
        
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <br />
          <div id="login-buttons">
            <button type="submit" className="btn btn-primary login-button">Log In</button>
            <a href="/register" formnovalidate="formnovalidate">
              <button className="btn btn-primary login-button" formnovalidate="formnovalidate">Register</button>
            </a>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default Login;
