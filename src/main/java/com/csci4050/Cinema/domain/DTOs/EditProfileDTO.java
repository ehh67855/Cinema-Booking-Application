package com.csci4050.Cinema.domain.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString
public class EditProfileDTO {
    private String username;
    private String name;
    private String newPassword;
    private String phoneNumber;
    private String promotions;
    private String street;
    private String city;
    private String state;
    private String zipCode;
}
