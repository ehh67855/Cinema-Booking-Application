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


    useEffect(() => {
        fetchMovie();
    });

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.trailerPictureURL} alt={`Trailer for ${movie.title}`} />
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Synopsis:</strong> {movie.synopsis}</p>
    </div>
  ) : (
    <div>Movie not found.</div>
  );
}

export default MovieDetails;
