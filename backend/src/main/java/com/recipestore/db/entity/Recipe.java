package com.recipestore.db.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity
@DynamicInsert
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long recipeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipeUserId", nullable = false)
    RecipeUser recipeUser;

    @Column(length = 45, nullable = false)
    String recipeName;

    @Column(length = 250, nullable = false)
    String recipeUrl;

    @Column(length = 200, nullable = false)
    String recipeDescription;

    @Column(length = 250, nullable = false)
    String recipeProfileImg;

    @Column(length = 250, nullable = false)
    String recipeAnnotation;

}
