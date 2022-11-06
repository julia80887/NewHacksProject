package com.example.ClosetApplication.Controller;

import com.example.ClosetApplication.Documents.Photo;
import com.example.ClosetApplication.Repository.PhotoRepository;
import com.example.ClosetApplication.Service.PhotoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.ClosetApplication.Repository.UserRepository;
import com.example.ClosetApplication.Documents.User;
import com.example.ClosetApplication.Service.UserService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/mycloset")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private PhotoService photoService;

    private PhotoRepository photoRepo;

    //In postman it is required to fill out param instead of body
    @PostMapping("/create")
    public int createUser(@RequestBody User user){
        String userName = user.getUserName();
        if(getUserbyUserName(userName) == null){
            if(UserService.isValid(user.getPassword())){
                userRepository.insert(user);
                return 1; // Return 1 if the User is created
            }
            else {
                return -1; // Return -1 if the password inputed does not meet requirments
            }
        }
        else{
            return 0; // Return 0 if the User already exists
        }

    }

    @PostMapping("/photos/add")
    public String addPhoto(@RequestParam String title,
                           @RequestParam MultipartFile image)
            throws IOException {
        String id = photoService.addPhoto(title, image);
        return "redirect:/photos/" + id;
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

    @GetMapping("/photos/{id}")
    public String getPhoto(@PathVariable String id, Model model) {
        Photo photo = photoService.getPhoto(id);
        model.addAttribute("title", photo.getTitle());
        model.addAttribute("image",
                Base64.getEncoder().encodeToString(photo.getImage().getData()));
        return "photos";
    }





}
