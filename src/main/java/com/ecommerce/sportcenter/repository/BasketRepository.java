package com.ecommerce.sportcenter.repository;

import com.ecommerce.sportcenter.entity.Basket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketRepository extends CrudRepository<Basket, String> {
}
