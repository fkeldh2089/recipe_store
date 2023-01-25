package com.recipestore.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipePostReq {
    String recipeUserEmail;

    String recipeName;

    String recipeUrl;

    String recipeDescription;

    String recipeProfileImg;

    String recipeAnnotation;

}
