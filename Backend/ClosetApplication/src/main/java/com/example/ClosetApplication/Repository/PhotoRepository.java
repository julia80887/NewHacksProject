package com.example.ClosetApplication.Repository;

import com.example.ClosetApplication.Documents.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepository extends MongoRepository<Photo, String> { }
