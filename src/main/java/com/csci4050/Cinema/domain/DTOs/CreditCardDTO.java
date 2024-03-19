package com.csci4050.Cinema.domain.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString
public class CreditCardDTO {
    private String cardType;
    private String expirationDate;
    private String billingAddress;
}