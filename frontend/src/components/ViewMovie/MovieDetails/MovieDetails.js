import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/movies/get-movie/?id=${id}`);
      if (response.ok) {
        const movieData = await response.json();
        setMovie(movieData);
      } else {
        console.error('Error fetching movie: HTTP status ', response.status);
      }
    } catch (err) {
      console.error('Error fetching movie:', err);
    }
  }

    const handlePlayVideo = () => {
    const videoIframe = document.getElementById('videoIframe');
    videoIframe.style.display = 'block'; // Show the iframe
    const videoUrl = videoIframe.getAttribute('data-src');
    videoIframe.setAttribute('src', videoUrl); // Start loading the video
    document.getElementById('videoPlaceholder').style.display = 'none'; // Hide the placeholder image
  }

  useEffect(() => {
    fetchMovie();
  }, [id]); // Ensure useEffect reruns when ID changes

  return movie ? (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <div className="video-container" onClick={handlePlayVideo}>
        <iframe 
          id="videoIframe"
          title="Trailer Video"
          src="" // Initially, src is empty
          data-src={movie.trailerVideoURL} // Actual video URL in data attribute
          allowFullScreen
          style={{display: 'none'}} // Initially hide the iframe
        ></iframe>
        <img 
          id="videoPlaceholder"
          src={movie.trailerPictureURL} 
          alt={`Trailer for ${movie.title}`}
          style={{cursor: 'pointer'}} // Change cursor to indicate clickable
        />
        <div id="playIcon" className="play-icon"></div> {/* Play icon container */}
      </div>
      <p><strong>Category:</strong> {movie.category}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Synopsis:</strong> {movie.synopsis}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Coming Soon:</strong> {movie.comingSoon ? 'Yes' : 'No'}</p>
      <div className="reviews">
      <h3>Reviews</h3>
      {movie.reviews.length > 0 ? (
        movie.reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.author}</strong></p>
            <p>Rating: {review.rating} stars</p>
            <p>{review.reviewContent}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
      <div className="showings">
        <h3>Show Dates and Times</h3>
        {movie.showings.map((showing, index) => (
          <div key={index}>
            <p>Date: {new Date(showing.date).toLocaleDateString()}</p>
            <p>Time: {showing.time}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Movie not found.</div>
  );
}

export default MovieDetails;
