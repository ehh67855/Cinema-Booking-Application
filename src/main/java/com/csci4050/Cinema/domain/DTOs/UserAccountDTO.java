package com.csci4050.Cinema.domain.DTOs;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class UserAccountDTO {

    private Long id;
    private String name;
    private String username;
    private String password;
    private String phoneNumber;
    private boolean isAdmin;
    private boolean promotionsEnabled;
    private List<CreditCardDTO> creditCards;
    private ShippingAddressDTO homeAddress;
}
