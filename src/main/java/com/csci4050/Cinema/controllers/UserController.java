package com.csci4050.Cinema.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csci4050.Cinema.domain.DTOs.LoginDTO;
import com.csci4050.Cinema.domain.user.UserAccount;
import com.csci4050.Cinema.service.UserService;


@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired UserService userService;

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody LoginDTO login) {
        return userService.isValidUser(login.getUsername(),login.getPassword()) ? 
         new ResponseEntity<>(String.valueOf(userService.getUserByUsername(login.getUsername()).isAdmin()), HttpStatus.OK)
        :
         new ResponseEntity<>("Unsuccessful login", HttpStatus.BAD_REQUEST);
    }
}
