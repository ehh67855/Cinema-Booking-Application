import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

function MovieCard({movie}) {
return (
    <div class = "card" className="card" style={{ width: '18rem', marginBottom: '20px' }}> {/* Bootstrap card container */}
      <img src={movie.trailerPictureURL} className="card-img-top" alt={`Trailer for ${movie.title}`} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5> {/* Movie title */}
        <p className="card-text"><strong>Director:</strong> {movie.director}</p> {/* Director */}
        <p className="card-text">{movie.synopsis}</p> {/* Synopsis */}
        <StarRating numStars={movie.numStars}/> <br/> <hr/>
        <p className="card-text">Rating: {movie.rating}</p> {/* Synopsis */}
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">Book</Link>
      </div>
    </div>
  );

}

export default MovieCard;