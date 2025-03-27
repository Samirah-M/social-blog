import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/AllPosts.css";
import api from '../api';

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    delayedFetch();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const response = await api.get('/api/posts');
      setAllPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch all posts', error);
    }
  }

  const delayedFetch = () => {
    setTimeout(fetchAllPosts,100);
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
            {post.title}<br /><br />
            {post.img_url!="" && <span>{post.img_url}<br /><br /></span>}
            {post.content}<br /><br />
            By: {post.user.username}<br /><br />
            <button id={post.id} onClick={(e) => deletePost(e)}>Delete</button>
            <button id={post.id} onClick={(e) => updatePost(e)}>Update</button>
          </li>
        ))}
      </ul>
      <div className="add-button">
        <button className="addPost" onClick={addPost}>Add Post</button>
      </div>
    </div>
  );
};

export default AllPosts;
