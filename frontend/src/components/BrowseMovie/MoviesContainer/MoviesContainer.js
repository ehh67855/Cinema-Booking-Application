import React, { useState } from "react";
import Movie from "../MovieCard/MovieCard";


function MoviesContainer({movies}) {


    return (
        <>
        <div className="container">
            <div className="row">
                {movies.map((movie) => (
                <div className="col-md-4" key={movie.id}>
                    <Movie movie={movie} />
                </div>
                ))}
            </div>
        </div>
        </>

    );
}

export default MoviesContainer;