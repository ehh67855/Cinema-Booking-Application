import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', username, password);
  };

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
        <div className="actions">
          <button className="btn btn-primary" type="submit">Log In</button>
          <a href="/forgot-password" className="btn btn-primary">Forgot Password?</a>
        </div>
        <div className="register-link">
          Not registered yet? <a href="/register">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
