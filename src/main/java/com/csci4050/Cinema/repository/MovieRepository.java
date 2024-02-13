package com.csci4050.Cinema.repository;

import com.csci4050.Cinema.domain.movie.Movie;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie,Long> {
    
}