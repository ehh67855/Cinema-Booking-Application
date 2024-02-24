import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";



function MovieCard({movie}) {

      const handlePlayVideo = () => {
    const videoIframe = document.getElementById('videoIframe');
    videoIframe.style.display = 'block'; // Show the iframe
    const videoUrl = videoIframe.getAttribute('data-src');
    videoIframe.setAttribute('src', videoUrl); // Start loading the video
    document.getElementById('videoPlaceholder').style.display = 'none'; // Hide the placeholder image
  }
  
return (
    <div class = "card" className="card" style={{ width: '18rem', marginBottom: '20px' }}> 
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
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text"><strong>Director:</strong> {movie.director}</p> 
        <p className="card-text">{movie.synopsis}</p> 
        <StarRating numStars={movie.numStars}/> <br/> <hr/>
        <p className="card-text">Rating: {movie.rating}</p> 
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">Book</Link>
      </div>
    </div>
  );
}

export default MovieCard;