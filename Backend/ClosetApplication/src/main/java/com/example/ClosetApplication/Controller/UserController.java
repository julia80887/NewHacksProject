package com.example.ClosetApplication.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.ClosetApplication.Repository.UserRepository;
import com.example.ClosetApplication.Documents.User;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/mycloset")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public String createUser(@RequestBody User user){
        String userName = user.getUserName();
        if(getUserbyUserName(userName) == null){
            userRepository.insert(user);
            return "Created User!";
        }
        else{
            return "There is already an account with this username";
        }


    }

    // Changed PostMapping to DeleteMapping to make it more accurate
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable String id){
        userRepository.deleteById(id);
    }

    @GetMapping("/list")
    public List<User> listUser(){
        return userRepository.findAll();
    }

    @GetMapping("/list/{userName}")
    public User getUserbyUserName(@PathVariable String userName){
        return userRepository.findByUserName(userName);
    }




}
