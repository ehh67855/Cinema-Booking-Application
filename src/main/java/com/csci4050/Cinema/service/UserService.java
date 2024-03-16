package com.csci4050.Cinema.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csci4050.Cinema.domain.DTOs.RegisterDTO;
import com.csci4050.Cinema.domain.user.CreditCard;
import com.csci4050.Cinema.domain.user.ShippingAdress;
import com.csci4050.Cinema.domain.user.UserAccount;
import com.csci4050.Cinema.repository.UserRepository;

@Service
public class UserService {
    @Autowired UserRepository userRepo;

    public boolean isValidUser(String username, String password) {
        return
            userRepo.findByUsername(username).isPresent()
            &&
            userRepo.findByUsername(username).get().getPassword().equals(password);
    }

    public UserAccount getUserByUsername(String username) {
        return userRepo.findByUsername(username).get();
    }

    public String saveUser(RegisterDTO register) {
        System.out.println(register);
        UserAccount user = new UserAccount();
        user.setAdmin(false);
        user.setUsername(register.getEmail());
        user.setPassword(register.getPassword());
        user.isEnabled();
        
        if (register.getIsSubscribed().equals("true")) {
            user.setPromotionsEnabled(true);
        } else {
            user.setPromotionsEnabled(false);
        }
        
        if (!register.getCardNumber().equals("") && register.getCardNumber() != null) {
            CreditCard card = new CreditCard();
            card.setCardType(register.getCardType());
            card.setExpirationDate(LocalDate.parse(register.getCardExpiry() + "-01"));
            card.setBillingAdress(register.getBillingAddr());
            user.setCreditCards(List.of(card));
        }

        if (!register.getStreet().equals("") && register.getStreet() != null) {
            ShippingAdress shippingAdress = new ShippingAdress();
            shippingAdress.setAdress(register.getStreet());
            shippingAdress.setCity(register.getCity());
            shippingAdress.setState(register.getState());
            shippingAdress.setZipcode(Integer.valueOf(register.getZipCode()));
            user.setShippingAddress(shippingAdress);
        }

        userRepo.save(user);
        return "registration successful";
    }
}
