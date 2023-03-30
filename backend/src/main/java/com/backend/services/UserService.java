package com.backend.services;

import com.backend.Dto.LoginDTO;
import com.backend.Dto.UserDTO;
import com.backend.models.User;
import com.backend.repositories.UserRepo;
import com.backend.payload.response.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserServiceInterface {
    @Autowired
    public  UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getId() ,
                userDTO.getFirst_name(),
                userDTO.getLast_name(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        userRepo.save(user);
        return user.getFirst_name();
    }

    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if(user1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password , encodedPassword);
            if(isPwdRight){
                Optional<User> user =  userRepo.findOneByEmailAndPassword(loginDTO.getEmail() , encodedPassword);
                if(user.isPresent()){
                    return new LoginMessage("Login Sucessful" , true);
                }else {
                    return new LoginMessage("Login Failed" , false);
                }
            }else{
                return new LoginMessage("Password not match" , false);
            }
        }else {
            return new LoginMessage("Email not exists" , false);
        }
    }
}
