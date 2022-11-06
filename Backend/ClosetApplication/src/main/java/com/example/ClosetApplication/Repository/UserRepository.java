package com.example.ClosetApplication.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.ClosetApplication.Documents.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUserName(String userName);
}
