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

	private int NUM_MOVIES = 9;

	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}

	@Bean
	CommandLineRunner run(@Autowired MovieRepository movieRepo) {
		return (args) -> {
			for (int i = 0 ; i < NUM_MOVIES ; i++) {
				createNewMovie(movieRepo);
			}
		};
	}

	private void createNewMovie(MovieRepository movieRepo) {
			MovieTime movieTime1 = new MovieTime();
			movieTime1.setDate(LocalDate.of(2024,2,13));
			movieTime1.setTime(LocalTime.of(2,20,0));
			MovieTime movieTime2 = new MovieTime();
			movieTime2.setDate(LocalDate.of(2024,2,13));
			movieTime2.setTime(LocalTime.of(2,20,0));
			Review review1 = new Review();
			review1.setAuthor("author");
			review1.setReviewContent("content");
			Review review2 = new Review();
			review2.setAuthor("author");
			review2.setReviewContent("content");
			Movie movie = new Movie();
			movie.setTitle("The Lion King");
			movie.setDescription("description");
			movie.setDirector("Roger Allers");
			movie.setSynopsis("This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones).");
			movie.setTrailerPictureURL("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpGOeTdpPET8OvEtjBBg03Wze_EZKu61WNaK4mxfoVcPZmZEN6");
			movie.setTrailerVideoURL("https://www.youtube.com/watch?v=7TavVZMewpY");
			movie.setCategory("Animated");
			movie.setReviews(List.of(review1, review2));
			movie.setRating(Rating.G);
			movie.setShowings(List.of(movieTime1,movieTime2));
			movie.setNumStars(3);
			movieRepo.save(movie);
	}

}
