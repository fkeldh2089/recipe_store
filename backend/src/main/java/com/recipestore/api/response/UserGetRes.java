package com.recipestore.api.response;

import com.recipestore.common.model.response.BaseResponseBody;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserGetRes extends BaseResponseBody {
    long userId;
    String userName;

    public static UserGetRes of (Integer statusCode, String message){
        UserGetRes res = new UserGetRes();
        res.setUserId(3);
        res.setUserName("hong");
        res.setStatusCode(statusCode);
        return res;
    }
}
