package com.csci4050.Cinema.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class User {
  @Id @GeneratedValue(strategy=GenerationType.AUTO) 
  private Integer id;
  private String username;
  private String password;
  private String email;
}
