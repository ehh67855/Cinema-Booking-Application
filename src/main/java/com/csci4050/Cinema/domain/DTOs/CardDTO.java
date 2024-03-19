package com.csci4050.Cinema.domain.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString
public class CardDTO {
    private String email;
    private String cardNumber;
    private String cardType;
    private String cardExpiry; 
    private String billingAddr;
}
