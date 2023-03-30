package com.backend.controllers;

import com.backend.Dto.LoginDTO;
import com.backend.Dto.UserDTO;
import com.backend.payload.response.LoginMessage;
import com.backend.services.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceInterface userServiceInterface;

    @PostMapping("/register")
    public String saveUser(@RequestBody UserDTO userDTO){
        return userServiceInterface.addUser(userDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginMessage loginMessage = userServiceInterface.loginUser(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }

}
