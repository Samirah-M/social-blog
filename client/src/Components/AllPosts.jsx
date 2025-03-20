import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  //navigate('/');

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const response = await api.get('/api/posts');
      setAllPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch all posts', error);
    }
  }

  const fetchPostbyId = async (e) => {
    try {
      const response = await api.get(`/api/posts/${e.target.id}`);
      setAllPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch all posts', error);
    }
  }

  const addPost = async () => {
    try {
      api.post('/api/posts', { title: "title", img_url: "img_url", created_by: "created by", content: "content" });
      setTimeout(fetchAllPosts,100);
    } catch (error) {
      console.error('Failed to add post', error);
    }
  }

  const updatePost = async (e) => {
    try {
      api.put(`/api/posts/${e.target.id}`, { title: "UPDATED", img_url: "UPDATED", created_by: "UPDATED by", content: "UPDATED" });
      setTimeout(fetchAllPosts,100);
    } catch (error) {
      console.error('Failed to update post', error);
    }
  }

  const deletePost = async (e) => {
    try {
      api.delete(`/api/posts/${e.target.id}`);
      setTimeout(fetchAllPosts,100);
    } catch (error) {
      console.error('Failed to delete post', error);
    }
  }

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}, {post.img_url}, {post.created_by}, {post.content}<br />
          <button id={post.id} onClick={(e) => deletePost(e)}>Delete</button><button id={post.id} onClick={(e) => updatePost(e)}>Update</button>
          <br /></li>
        ))}
      </ul>
      <button onClick={addPost}>Add Post</button>
    </div>
  );
};

export default AllPosts;
