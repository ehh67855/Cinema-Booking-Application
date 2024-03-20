package com.csci4050.Cinema.domain.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class ShippingAddressDTO {
    private String address;
    private String city;
    private String state;
    private Integer zipcode;
}