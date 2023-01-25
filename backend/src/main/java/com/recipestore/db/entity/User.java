package com.recipestore.db.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity
@DynamicInsert
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long userId;

    @Column(length = 45, nullable = false)
    String userNickname;

    @OneToMany(mappedBy = "user")
    List<RecipeUser> recipeUsers;

    @Column(length = 50, nullable = false)
    String userEmail;

    @Column(length = 200, nullable = false)
    String userDescription;

    @Column(length = 250, nullable = false)
    String userProfileImage;

}
