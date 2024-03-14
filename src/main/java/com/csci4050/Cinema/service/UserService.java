package com.csci4050.Cinema.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
