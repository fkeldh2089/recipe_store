package com.recipestore.db.repository;

import com.recipestore.db.entity.RecipeUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeUserRepository extends JpaRepository<RecipeUser, Long> {
    RecipeUser findRecipeUserByRecipeUserId(long recipeUserId);
}
