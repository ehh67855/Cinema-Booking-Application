import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './HomePage.css'; // Your CSS file for styling

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Our Cinema System</h1>
        <p>Discover and book tickets for your favorite movies!</p>
      </header>
      
      <div className="auth-options">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
      </div>

      <div className="browse-movies">
        <Link to="/Browse" className="btn btn-success">Start Browsing Movies</Link>
      </div>
    </div>
  );
}

export default HomePage;
