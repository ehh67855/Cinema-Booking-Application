package com.csci4050.Cinema.domain.movie;

import com.csci4050.Cinema.domain.user.UserAccount;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor @NoArgsConstructor @Setter @Getter @ToString
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    @Enumerated(EnumType.STRING)
    private TicketType ticketType; // ADULT, CHILD

    private Double price;

    @ManyToOne
    @JoinColumn(name = "movie_time_id")
    private MovieTime movieTime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserAccount userAccount;

    private String seat; //e.g A10

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking; // New field to link ticket to a booking
}

enum TicketType {
    ADULT, CHILD,SENIOR
}
