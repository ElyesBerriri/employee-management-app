package com.backend.services;

import com.backend.Dto.LoginDTO;
import com.backend.Dto.UserDTO;
import com.backend.payload.response.LoginMessage;

public interface UserServiceInterface {
    String addUser(UserDTO userDTO);

    LoginMessage loginUser(LoginDTO loginDTO);
}
