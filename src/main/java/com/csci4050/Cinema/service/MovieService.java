package com.csci4050.Cinema.service;

import java.util.Optional;

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

    public Optional<Movie> getMovie(Long id) {
        return movieRepository.findById(id);
    }
    
}
