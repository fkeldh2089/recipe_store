package com.recipestore.db.repository;

import com.recipestore.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUserEmail(String userEmail);
}
