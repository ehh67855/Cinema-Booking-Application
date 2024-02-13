package com.csci4050.Cinema.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.csci4050.Cinema.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

}