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
      navigate('/'); // Redirects to the root route without reloading the page
    } else {
      console.error('Login failed:', response.status, response.statusText);
    }

  } catch (error) {
    console.error(error);
  }
}


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
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

        <button type="submit" className="btn btn-primary login-button">Log In</button>

        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <br />
          Not registered yet? <a href="/register">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
