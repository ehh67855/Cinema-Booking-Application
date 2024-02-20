import React, { useEffect, useState } from "react";
import MoviesContainer from "./MoviesContainer";
import SearchBar from "./SearchBar";


function MovieBrowse() {
    const[movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/movies/get-all-movies');
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setMovies(data)
        } catch (error) {
            console.error("Failed to fetch movies: ", error);
        }
    } 

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
    };

    useEffect( () => {
        fetchMovies();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div class = "container">
            <SearchBar onSearch = {handleSearch}></SearchBar>
            <MoviesContainer movies={filteredMovies}></MoviesContainer>
        </div>
    );
}

export default MovieBrowse;