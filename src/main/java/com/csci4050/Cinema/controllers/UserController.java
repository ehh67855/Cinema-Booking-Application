package com.csci4050.Cinema.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csci4050.Cinema.domain.DTOs.CardDTO;
import com.csci4050.Cinema.domain.DTOs.EditProfileDTO;
import com.csci4050.Cinema.domain.DTOs.ForgotPasswordRequest;
import com.csci4050.Cinema.domain.DTOs.LoginDTO;
import com.csci4050.Cinema.domain.DTOs.PasswordResetDTO;
import com.csci4050.Cinema.domain.DTOs.RegisterDTO;
import com.csci4050.Cinema.domain.DTOs.ShippingAddressDTO;
import com.csci4050.Cinema.domain.DTOs.UserAccountDTO;
import com.csci4050.Cinema.domain.user.CreditCard;
import com.csci4050.Cinema.domain.user.UserAccount;
import com.csci4050.Cinema.service.UserService;

import jakarta.mail.Address;


@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO login) {
        return userService.isValidUser(login.getUsername(),login.getPassword()) 
        ? 
         new ResponseEntity<>(String.valueOf(userService.getUserByUsername(login.getUsername()).isAdmin()), HttpStatus.OK)
        :
         new ResponseEntity<>("Unsuccessful login", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO register) {
        return userService.saveUser(register);
    }

    @GetMapping("/get-user")
    public ResponseEntity<?> getUser(@RequestParam String username) {
        UserAccount user = userService.getUserByUsername(username);
        UserAccountDTO userDTO = new UserAccountDTO();
        userDTO.setName(user.getName());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setAdmin(user.isAdmin());
        userDTO.setPromotionsEnabled(user.isPromotionsEnabled());
        userDTO.setAdmin(false);
        userDTO.setPassword(user.getPassword());
        ShippingAddressDTO addressDTO = new ShippingAddressDTO();
        addressDTO.setAddress(user.getHomeAddress().getAdress());
        addressDTO.setState(user.getHomeAddress().getState());
        addressDTO.setCity(user.getHomeAddress().getCity());
        addressDTO.setZipcode(user.getHomeAddress().getZipcode());
        userDTO.setHomeAddress(addressDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/editProfile")
    public ResponseEntity<?> editUserProfile(@RequestBody EditProfileDTO profileDTO) {
        // Service method to update user profile
        boolean updateSuccess = userService.updateUserProfile(profileDTO);
        if (updateSuccess) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Update failed");
        }
    }

    @PostMapping("/create-card")
    public ResponseEntity<String> createCard(@RequestBody CardDTO cardInfoDTO) {
        boolean addedCard = userService.addCard(cardInfoDTO);
        if (addedCard) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Update failed");
        }
        
    }

     @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody PasswordResetDTO passwordResetDTO) {
        userService.resetPassword(passwordResetDTO);
        return ResponseEntity.ok("Password reset successfully.");
       
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        String email = forgotPasswordRequest.getEmail();
        userService.sendForgotPasswordEmail(email);
        return ResponseEntity.ok().body("Password reset instructions have been sent to " + email);
    }


}
