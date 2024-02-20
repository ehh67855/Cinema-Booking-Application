package com.csci4050.Cinema.domain.movie;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import org.hibernate.engine.internal.Collections;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//. For each movie, the system must record:
// movie title, category, cast, director, producer, synopsis, reviews, trailer picture and video, MPAA-US film rating code [1], and show dates and times.
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String description;

    private String director;

    private String synopsis;

    private String trailerPictureURL;

    private String trailerVideoURL;

    private Boolean comingSoon;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id")
    private List<Review> reviews = new ArrayList<Review>();

    //specify how the rating field should be persisted in the database
    @Enumerated(EnumType.STRING)
    private Rating rating;

    //movie_id is the name of the foreign key column in the MovieTime table that references the Movie table.
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id")
    private List<MovieTime> showings = new ArrayList<MovieTime>();

    
}
