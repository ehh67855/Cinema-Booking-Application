package com.csci4050.Cinema;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.csci4050.Cinema.domain.movie.Movie;
import com.csci4050.Cinema.domain.movie.MovieTime;
import com.csci4050.Cinema.domain.movie.Review;
import com.csci4050.Cinema.domain.movie.Rating;

import com.csci4050.Cinema.repository.MovieRepository;

import java.time.LocalDate;
import java.time.LocalTime;

import java.util.List;

@SpringBootApplication
public class CinemaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}

	@Bean
	CommandLineRunner run(@Autowired MovieRepository movieRepo) {
		return (args) -> {
			MovieTime movieTime1 = new MovieTime(1L, LocalDate.of(2024,2,13), LocalTime.of(2,20,0));
			MovieTime movieTime2 = new MovieTime(2L, LocalDate.of(2024,2,13), LocalTime.of(2,20,0));
			Review review1 = new Review(1L,1,"author","content");
			Review review2 = new Review(2L,4,"author","content");
			Movie movie = new Movie(
				1L,
				"The Lion King",
				"story about lion",
				"JJ Abrams",
				"The lion does stuff",
				"trailer picture",
				"trailer video",
				List.of(review1, review2),
				Rating.G,
				List.of(movieTime1,movieTime2)
			);

			movieRepo.save(movie);

		};
	}

}
