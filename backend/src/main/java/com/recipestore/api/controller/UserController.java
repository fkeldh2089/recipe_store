package com.recipestore.api.controller;

import com.recipestore.common.model.response.BaseResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.http.ResponseEntity;

import com.recipestore.api.response.UserGetRes;
@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping
    public ResponseEntity<? extends BaseResponseBody> getUserName(){
        return ResponseEntity.status(200).body(UserGetRes.of(200, "Hi"));
    }
}
