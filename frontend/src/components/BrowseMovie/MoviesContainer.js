import React, { useState } from "react";
import Movie from "./MovieCard";


function MoviesContainer({movies}) {


    return (
        <>
        <div className="container"> {/* Bootstrap container */}
            <h2>Movies List</h2>
            <div className="row"> {/* Bootstrap row */}
                {movies.map((movie) => (
                <div className="col-md-4" key={movie.id}> {/* Bootstrap column */}
                    <Movie movie={movie} />
                </div>
                ))}
            </div>
        </div>
        </>

    );
}

export default MoviesContainer;