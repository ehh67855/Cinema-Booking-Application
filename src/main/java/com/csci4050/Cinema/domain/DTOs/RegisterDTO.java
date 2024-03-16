package com.csci4050.Cinema.domain.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @ToString
public class RegisterDTO {
    private String name;
    private String password;
    private String isSubscribed;
    private String phoneNumber;
    private String cardNumber;
    private String cardExpiry;
    private String billingAddr;
    private String street;
    private String city;
    private String state;
    private String cardType;
    private String zipCode;
    private String email;


}

// body: JSON.stringify({
//           username: name, 
//           password: password,
//           isSubscribed: isSubscribed,
//           phoneNumber: phoneNumber,
//           cardNumber: cardNumber,
//           cardExpiry: cardExpiry,
//           billingAddr: billingAddr,
//           street: street,
//           city: city,
//           state: state,
//           cardType: cardType,
//           zipCode: zipCode,
//           email: email,
//         })