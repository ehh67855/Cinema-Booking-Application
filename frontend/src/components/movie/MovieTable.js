import React, { useState, useEffect } from "react";

function MovieTable({ movies }) {
  // State to hold movies
  const [movieList, setMovieList] = useState([]);

  // Fetch movies when component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch movies function
  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/movies'); // Assuming your backend API endpoint for movies is '/api/movies'
      const data = await response.json();
      setMovieList(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Movie Table</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Director</th>
            <th>Synopsis</th>
            <th>Trailer Picture</th>
            <th>Trailer Video</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map(movie => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.description}</td>
              <td>{movie.director}</td>
              <td>{movie.synopsis}</td>
              <td>
                <img src={movie.trailerPictureURL} alt="Trailer" style={{ width: '100px' }} />
              </td>
              <td>
                <video controls src={movie.trailerVideoURL} style={{ width: '100px' }} />
              </td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieTable;
