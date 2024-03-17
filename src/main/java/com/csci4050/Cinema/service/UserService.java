package com.csci4050.Cinema.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<String> saveUser(RegisterDTO register) {
        System.out.println(register);

        Optional<UserAccount> existingUser = userRepo.findByUsername(register.getEmail());
        if (existingUser.isPresent()) {
            return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
        }


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
        
        if (register.getCardNumber() != null && !register.getCardNumber().equals("")) {
            CreditCard card = new CreditCard();
            card.setCardType(register.getCardType());
            card.setExpirationDate(LocalDate.parse(register.getCardExpiry() + "-01"));
            card.setBillingAdress(register.getBillingAddr());
            user.setCreditCards(List.of(card));
        }

        if (register.getStreet() != null && !register.getStreet().equals("")) {
            ShippingAdress homAdress = new ShippingAdress();
            homAdress.setAdress(register.getStreet());
            homAdress.setCity(register.getCity());
            homAdress.setState(register.getState());
            homAdress.setZipcode(Integer.valueOf(register.getZipCode()));
            user.setHomeAddress(homAdress);
        }

        userRepo.save(user);

        return new ResponseEntity<>("Registration Successful", HttpStatus.OK);
    }

    public ResponseEntity<UserAccount> getUser(String username) {
        return userRepo.findByUsername(username).isPresent() 
        ?
            new ResponseEntity<>(userRepo.findByUsername(username).get(), HttpStatus.OK)
        :
            new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
