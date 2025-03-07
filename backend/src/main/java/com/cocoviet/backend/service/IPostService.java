package com.cocoviet.backend.service;

import com.cocoviet.backend.models.dto.PostDTO;
import com.cocoviet.backend.models.request.PostRequest;

import java.io.IOException;
import java.util.List;

public interface IPostService {
    PostDTO createPost(PostRequest postRequest);
    PostDTO getPostById(String  postId);
    List<PostDTO> getAllPosts();
}