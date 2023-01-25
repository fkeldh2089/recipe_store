package com.recipestore.api.controller;

import com.recipestore.api.request.RecipePostReq;
import com.recipestore.api.response.UserGetRes;
import com.recipestore.api.service.RecipeService;
import com.recipestore.common.model.response.BaseResponseBody;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipe")
@CrossOrigin("*")
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;
    @PostMapping
    public ResponseEntity<? extends BaseResponseBody> addRecipe(@Validated@RequestBody RecipePostReq recipePostReq){
        try{
            recipeService.addRecipe(recipePostReq);
        }catch(Exception exception){
            System.out.println(exception);
            return ResponseEntity.status(400).body(UserGetRes.of(400, "wt"));
        };

        return ResponseEntity.status(200).body(UserGetRes.of(200, "Hi"));
    }
}
