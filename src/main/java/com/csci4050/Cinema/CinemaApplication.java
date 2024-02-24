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
			createDummyMovies(movieRepo);
		};
	}

	
	public void createDummyMovies(MovieRepository movieRepo) {
		String[] movieTitles = {
			"Eternal Quest", "Beyond Horizons", "Shadow's Edge",
			"Timeless", "Galactic Pioneers", "Mystery of the Depths",
			"Uncharted Realms", "The Forgotten Era", "Labyrinth of Dreams",
			"Echoes of Tomorrow"
		};

		String[] directors = {
			"John Smith", "Emily Johnson", "Michael Brown",
			"Linda Davis", "James Wilson", "Barbara Moore",
			"Robert Taylor", "Maria Anderson", "Charles Thomas",
			"Jessica Jackson"
		};

		String[] movieTrailerImageURLs = {
			"https://m.media-amazon.com/images/I/415Vq23LkIL._AC_UF1000,1000_QL80_.jpg",
			"https://m.media-amazon.com/images/M/MV5BMGM1NzIwNDYtMzIyNS00OWJjLTlhYjYtMzYzYmFhNzAxYmM2XkEyXkFqcGdeQXVyNzU2NTY2MDg@._V1_.jpg",
			"https://m.media-amazon.com/images/M/MV5BZTczZDg0MDItMTI4MC00ZGRiLTk2NzUtZGQ2MDYzYzk2YTMwXkEyXkFqcGdeQXVyNTcyMTgyNjY@._V1_FMjpg_UX1000_.jpg",
			"https://m.media-amazon.com/images/M/MV5BMjA5ODkxODgzMl5BMl5BanBnXkFtZTgwNzA4MTc5NDM@._V1_FMjpg_UX1000_.jpg",
			"https://images.igdb.com/igdb/image/upload/t_original/co4h26.webp",
			"https://m.media-amazon.com/images/M/MV5BNmJhZDY1YzYtMThkYS00ZDNiLWJjMjEtZjU4MmY2NmRiNWFmXkEyXkFqcGdeQXVyNTkzMzg3NDM@._V1_.jpg",
			"https://i1.sndcdn.com/artworks-9IFxJQ6yevwlcOSy-tQ1Wbw-t500x500.jpg",
			"https://images.moviesanywhere.com/259e8d9930b8d9d41ddbc1e7b0e2b7a8/dd46a372-02a3-415a-b92f-94bbdafb4e87.jpg",
			"https://m.media-amazon.com/images/M/MV5BYWU4N2FjZDMtZDVmNi00NjZjLWIyZWUtNmZmYWFiOGFkMjYxXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_.jpg",
			"https://m.media-amazon.com/images/M/MV5BMjM3Njg3NjUyNF5BMl5BanBnXkFtZTgwODg2NzYxNzE@._V1_.jpg"
		};

		String[] categories = {
			"Adventure", "Sci-Fi", "Fantasy",
			"Drama", "Action", "Mystery",
			"Thriller", "Documentary", "Animation",
			"Comedy"
		};

		for (int i = 0; i < 10; i++) {
			MovieTime movieTime1 = new MovieTime();
			movieTime1.setDate(LocalDate.of(2024, 2, (13 + i) % 28 + 1)); // To vary the dates a bit
			movieTime1.setTime(LocalTime.of((2 + i) % 24, 20));

			MovieTime movieTime2 = new MovieTime();
			movieTime2.setDate(LocalDate.of(2024, 2, (13 + i) % 28 + 1));
			movieTime2.setTime(LocalTime.of((2 + i) % 24, 50)); // Different time from the first

			Review review1 = new Review();
			review1.setAuthor("Author " + (i + 1));
			review1.setReviewContent("Content of review " + (i + 1));

			Review review2 = new Review();
			review2.setAuthor("Author " + (10 - i));
			review2.setReviewContent("Content of review " + (10 - i));

			Movie movie = new Movie();
			movie.setTitle(movieTitles[i]);
			movie.setDescription("Description of " + movieTitles[i]);
			movie.setDirector(directors[i]);
			movie.setSynopsis("Synopsis of " + movieTitles[i]);
			movie.setTrailerPictureURL(movieTrailerImageURLs[i]);
			movie.setTrailerVideoURL("https://youtube.com/trailer" + i);
			movie.setCategory(categories[i]);
			movie.setReviews(List.of(review1, review2));
			movie.setRating(Rating.values()[(i % Rating.values().length)]); // Assuming Rating is an enum
			movie.setShowings(List.of(movieTime1, movieTime2));
			movie.setNumStars((i % 5) + 1); // Ratings from 1 to 5
			movie.setComingSoon(i % 2 == 0); // Alternates between coming soon or not

			movieRepo.save(movie);
		}
	}
}
