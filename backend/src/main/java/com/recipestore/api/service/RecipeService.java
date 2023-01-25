package com.recipestore.api.service;

import com.recipestore.api.request.RecipePostReq;
import com.recipestore.db.entity.Recipe;
import com.recipestore.db.entity.RecipeUser;
import com.recipestore.db.entity.User;
import com.recipestore.db.repository.RecipeRepository;
import com.recipestore.db.repository.RecipeUserRepository;
import com.recipestore.db.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RecipeService {
    private final RecipeUserRepository recipeUserRepository;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    public void addRecipe(RecipePostReq recipePostReq){
        String recipeUserEmail = recipePostReq.getRecipeUserEmail();

        User user = userRepository.findUserByUserEmail(recipeUserEmail);
        long recipeUserId = user.getUserId();
        RecipeUser recipeUser = recipeUserRepository.findRecipeUserByRecipeUserId(recipeUserId);
        Recipe recipe =
                Recipe.builder().recipeUrl(recipePostReq.getRecipeUrl())
                        .recipeName(recipePostReq.getRecipeName())
                        .recipeDescription(recipePostReq.getRecipeDescription())
                        .recipeProfileImg(recipePostReq.getRecipeProfileImg())
                        .recipeAnnotation(recipePostReq.getRecipeAnnotation())
                        .recipeUser(recipeUser)
                        .build();
        recipeRepository.save(recipe);
    }
}
