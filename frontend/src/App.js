import React, { Component } from 'react';
import MovieTable from './components/movie/MovieTable'; // Assuming MovieTable component is in the same directory
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:8080/api/movies');
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
        <main className="container">
          <MovieTable movies={movies} />
        </main>
      </div>
    );
  }
}

export default App;
