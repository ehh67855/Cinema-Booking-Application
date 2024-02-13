package com.csci4050.Cinema.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csci4050.Cinema.domain.movie.Movie;
import com.csci4050.Cinema.repository.MovieRepository;

@Service
public class MovieService {

    @Autowired MovieRepository movieRepository;

    public Iterable<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
    
}
