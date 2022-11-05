package com.example.ClosetApplication.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.ClosetApplication.Repository.UserRepository;
import com.example.ClosetApplication.Documents.User;

import java.util.List;

@RestController
@RequestMapping("/mycloset")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public void createUser(@RequestBody User user){
        userRepository.insert(user);
    }

    // Changed PostMapping to DeleteMapping to make it more accurate
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        userRepository.deleteById(id);
    }

    @GetMapping("/list")
    public List<User> listUser(){
        return userRepository.findAll();
    }
}
