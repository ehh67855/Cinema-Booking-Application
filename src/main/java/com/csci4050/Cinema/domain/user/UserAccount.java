package com.csci4050.Cinema.domain.user;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import com.csci4050.Cinema.domain.movie.MovieTime;

// import org.springframework.security.core.GrantedAuthority;

import java.util.List;

import jakarta.persistence.CascadeType;

// import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @ToString
@Table(name = "users")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String username;

    private String password;
    
    private boolean enabled = true;

    private boolean isAdmin;

    private boolean promotionsEnabled;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userAccount")
    private List<CreditCard> creditCards; 

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private ShippingAdress homeAddress;
}
