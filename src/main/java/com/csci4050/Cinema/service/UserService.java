package com.csci4050.Cinema.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.csci4050.Cinema.domain.DTOs.CardDTO;
import com.csci4050.Cinema.domain.DTOs.CreditCardDTO;
import com.csci4050.Cinema.domain.DTOs.EditProfileDTO;
import com.csci4050.Cinema.domain.DTOs.PasswordResetDTO;
import com.csci4050.Cinema.domain.DTOs.RegisterDTO;
import com.csci4050.Cinema.domain.DTOs.ShippingAddressDTO;
import com.csci4050.Cinema.domain.DTOs.UserAccountDTO;
import com.csci4050.Cinema.domain.user.CreditCard;
import com.csci4050.Cinema.domain.user.ShippingAdress;
import com.csci4050.Cinema.domain.user.UserAccount;
import com.csci4050.Cinema.repository.UserRepository;

@Service
public class UserService {
    @Autowired UserRepository userRepo;
    @Autowired private EmailService emailService;


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
        user.setName(register.getName());
        user.setPhoneNumber(register.getPhoneNumber());

        user.isEnabled();
        
        if (register.getIsSubscribed()!= null && register.getIsSubscribed().equals("true")) {
            user.setPromotionsEnabled(true);
        } else {
            user.setPromotionsEnabled(false);
        }
        
        // if (register.getCardNumber() != null && !register.getCardNumber().equals("")) {
            CreditCard card = new CreditCard();
            card.setCardType(register.getCardType());
            // card.setExpirationDate(LocalDate.parse(register.getCardExpiry() + "-01"));
            card.setBillingAdress(register.getBillingAddr());
            card.setUserAccount(user);
            user.setCreditCards(List.of(card));
        // }

        // if (register.getStreet() != null && !register.getStreet().equals("")) {
            ShippingAdress homeAdress = new ShippingAdress();
            homeAdress.setAdress(register.getStreet());
            homeAdress.setCity(register.getCity());
            homeAdress.setState(register.getState());
            homeAdress.setZipcode(Integer.valueOf(register.getZipCode()));
            user.setHomeAddress(homeAdress);
        // }

        userRepo.save(user);

        emailService.sendSimpleMessage(user.getUsername(), "Registration complete", "You're account has been saved, you can now start booking movies");

        return new ResponseEntity<>("Registration Successful", HttpStatus.OK);
    }

    public ResponseEntity<UserAccount> getUser(String username) {
        return userRepo.findByUsername(username).isPresent() 
        ?
            new ResponseEntity<>(userRepo.findByUsername(username).get(), HttpStatus.OK)
        :
            new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public boolean updateUserProfile(EditProfileDTO profileDTO) {

        UserAccount user = getUserByUsername(profileDTO.getUsername());
        // if (profileDTO.getName() != null && !profileDTO.getName().equals("")) {
        //     user.setName(profileDTO.getName());
        // } else if (profileDTO.getNewPassword() != null && !profileDTO.getNewPassword().equals("")) {
        //     user.setPassword(profileDTO.getNewPassword());
        // } else if (profileDTO.getPhoneNumber() != null && !profileDTO.getPhoneNumber().equals("")) {
        //     user.setPhoneNumber(profileDTO.getPhoneNumber());
        // } else if (profileDTO.getPromotions() != null && !profileDTO.getPromotions().equals("")) {
        //     user.setPromotionsEnabled(profileDTO.getPromotions().equals(""));
        // } else if (profileDTO.getStreet() != null && !profileDTO.getStreet().equals("")) {
        //     user.getHomeAddress().setAdress(profileDTO.getStreet());
        // } else if (profileDTO.getCity() != null && !profileDTO.getCity().equals("")) {
        //     user.getHomeAddress().setCity(profileDTO.getCity());
        // } else if (profileDTO.getZipCode() != null && !profileDTO.getZipCode().equals("")) {
        //     user.getHomeAddress().setZipcode(Integer.valueOf(profileDTO.getZipCode()));
        // } 

        user.setName(profileDTO.getName());

        if (!profileDTO.getNewPassword().equals("")) {
            emailService.sendSimpleMessage(user.getUsername(),"Password update", "Your password has been successfully updated");
            user.setPassword(profileDTO.getNewPassword());
        }

        user.setPhoneNumber(profileDTO.getPhoneNumber());
        user.setPromotionsEnabled(profileDTO.getPromotions().equals(""));
        user.setPromotionsEnabled(profileDTO.getPromotions().equals(""));
        user.getHomeAddress().setAdress(profileDTO.getStreet());
        user.getHomeAddress().setCity(profileDTO.getCity());
        user.getHomeAddress().setZipcode(Integer.valueOf(profileDTO.getZipCode()));

        userRepo.save(user);

        emailService.sendSimpleMessage(user.getUsername(), "Profile update", "Your profile has been sucessfully updated");



        return true;
    }

    public boolean addCard(CardDTO cardInfoDTO) {
        System.out.println(cardInfoDTO);
        UserAccount user = getUserByUsername(cardInfoDTO.getEmail());
        CreditCard card = new CreditCard();
        card.setCardType(cardInfoDTO.getCardType());
        card.setExpirationDate(cardInfoDTO.getCardExpiry());
        card.setBillingAdress(cardInfoDTO.getBillingAddr());
        card.setUserAccount(user);
        user.getCreditCards().add(card);
        userRepo.save(user);
        return true;

    }

    public void sendForgotPasswordEmail(String email) {
        emailService.sendSimpleMessage(email,"Password reset", "To reset your password go to the following link:http://localhost:3000/password-reset");
    }

    public void resetPassword(PasswordResetDTO passwordResetDTO) {
        getUserByUsername(passwordResetDTO.getEmail()).setPassword(passwordResetDTO.getNewPassword());
        emailService.sendSimpleMessage(passwordResetDTO.getEmail(), "Password reset successful", "Your password has been successfully reset");
    }

    public Optional<UserAccount> getUserOptional(String username) {
        return userRepo.findByUsername(username);
    }



}
