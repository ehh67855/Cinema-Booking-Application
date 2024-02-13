import React, { Component } from 'react';
import MovieTable from './components/movie/MovieTable'; // Assuming MovieTable component is in the same directory

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:8080/api/movies'); // Assuming your backend API endpoint for movies is '/api/movies'
      const data = await response.json();
      this.setState({ movies: data });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie Library</h1>
        </header>
        <main>
          <MovieTable movies={movies} />
        </main>
      </div>
    );
  }
}

export default App;
