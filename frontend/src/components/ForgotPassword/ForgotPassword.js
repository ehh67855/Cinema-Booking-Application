import React, { useState } from 'react';
import './ForgotPassword.css'; // Make sure to create and link a corresponding CSS file for styling

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Password reset request for: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {!submitted ? (
          <>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="actions">
              <button type="submit">Submit</button>
            </div>
          </>
        ) : (
          <div className="confirmation-message">
            <p>If an account exists for {email}, you will receive an email with instructions to reset your password.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ForgotPassword;