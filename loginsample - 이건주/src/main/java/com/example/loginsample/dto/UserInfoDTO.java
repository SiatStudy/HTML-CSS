package com.example.loginsample.dto;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@Alias("UserinfoDTO")
public class UserInfoDTO {
    private String userid;
    private String userpw;
    private String useremail;
}
