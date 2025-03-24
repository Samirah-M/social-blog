import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/AllPosts.css";
import api from '../api';

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  //navigate('/');

  useEffect(() => {
    delayedFetch();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const response = await api.get('/api/posts');
      console.log(response.data);
      setAllPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch all posts', error);
    }
  }

  const delayedFetch = () => {
    setTimeout(fetchAllPosts,100);
  }

  const fetchPostbyId = async (e) => {
    try {
      const response = await api.get(`/api/posts/${e.target.id}`);
      setAllPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch post', error);
    }
  }

  const fetchUserbyId = async (created_by) => {
    try {
      const response = await api.get(`/api/users/`);
      console.log(response)
      return created_by;
    } catch (error) {
      console.error('Failed to fetch user', error);
    }
  }

  const addPost = async () => {
    navigate("/new-post");
  }

  const updatePost = async (e) => {
    navigate(`/edit-post/${e.target.id}`);
  }

  const deletePost = async (e) => {
    try {
      api.delete(`/api/posts/${e.target.id}`);
      delayedFetch()
    } catch (error) {
      console.error('Failed to delete post', error);
    }
  }

  return (
    <div>
      <h1>All Posts</h1>
      <ul className="posts">
        {allPosts.map((post) => (
          <li className="post" key={post.id}>
            {post.title}<br />
            {post.img_url}<br />
            {post.created_by}<br />
            {post.content}<br />
            <button id={post.id} onClick={(e) => deletePost(e)}>Delete</button>
            <button id={post.id} onClick={(e) => updatePost(e)}>Update</button>
          </li>
        ))}
      </ul>
      <button className="addPost" onClick={addPost}>Add Post</button>``
    </div>
  );
};

export default AllPosts;
