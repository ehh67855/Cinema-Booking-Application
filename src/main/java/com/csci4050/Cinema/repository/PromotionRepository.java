package com.csci4050.Cinema.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.csci4050.Cinema.domain.Promotion;

@Repository
public interface PromotionRepository extends CrudRepository<Promotion,Long> {
    
}
