package com.csci4050.Cinema.domain.movie;

import java.time.LocalDate;
import java.time.LocalTime;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieTime {

    @Id @GeneratedValue(strategy = GenerationType.AUTO) private Long id;
    private LocalDate date;
    private LocalTime time;

    public MovieTime(int year, int month, int date, int hourOfDay, int minute, int second) {
        this.date = LocalDate.of(year,month,date);
        this.time = LocalTime.of(hourOfDay,minute,second);
    }

    public MovieTime(LocalDate date) {
        this.date = date;
    }

    public MovieTime(LocalTime time) {
        this.time = time;
    }


}
