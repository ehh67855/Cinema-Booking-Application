import React, { useEffect, useState } from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import SearchBar from "../SearchBar/SearchBar";


function MovieBrowse() {

    const[movies,setMovies] = useState([]);
    const [searchTitleInput, setSearchTitleInput] = useState('');
    const [searchCategoryInput, setSearchCategoryInput] = useState('');
    const [searchShowingInput, setSearchShowingInput] = useState(null);

    useEffect( () => {
        fetchMovies();
    }, []);

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

    const handleSearchTitleInput = (titleValue) => {
        setSearchTitleInput(titleValue);
    };

    const handleSearchCategoryInput = (categoryValue) => {
        setSearchCategoryInput(categoryValue);
    };

    const handleSearchShowingInput = (showingValue) => {
        setSearchShowingInput(showingValue);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase()
            .includes(searchTitleInput.toLowerCase())
        &&
        movie.category.toLowerCase()
            .includes(searchCategoryInput.toLowerCase())
        &&
        (searchShowingInput === null 
            || searchShowingInput === '' 
            || movie.showings.some(showing => showing.date === searchShowingInput)
        )
    );

    return (

        <div class = "container">
            <div class = "searchContainer">
                <SearchBar onSearch = {handleSearchTitleInput} placeholder = "Enter Movie Title"></SearchBar>
                <SearchBar onSearch = {handleSearchCategoryInput} placeholder = "Enter Category"></SearchBar>
                <SearchBar onSearch = {handleSearchShowingInput} type = "Date"></SearchBar>
            </div>
            <MoviesContainer movies={filteredMovies}></MoviesContainer>
        </div>

    );
}

export default MovieBrowse;