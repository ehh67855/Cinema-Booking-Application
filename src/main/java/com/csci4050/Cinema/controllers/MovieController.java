package com.csci4050.Cinema.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csci4050.Cinema.domain.movie.Movie;
import com.csci4050.Cinema.service.MovieService;

@RestController
@RequestMapping("/api/movies")

public class MovieController {

    @Autowired MovieService movieService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-all-movies")
    public ResponseEntity<Iterable<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-movie/")
    public ResponseEntity<Movie> getMovie(@RequestParam Long id) {
        Optional<Movie> optionalMovie = movieService.getMovie(id);
        return optionalMovie
            .map(movie -> ResponseEntity.ok(movie))
            .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
