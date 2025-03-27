import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import "./CSS/AddPost.css";
import api from '../api';


const AddPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img_url, setImgUrl] = useState("");
    const { user } = useSession();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            api.post('/api/posts', { title: title, img_url: img_url, created_by: user.id, content: content });
            navigate('/posts')
        } catch (error) {
            console.error('Failed to add post', error);
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <h2>New Post</h2>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/>
                <br />
                <input
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required/>
                <br />
                <input
                type="text"
                placeholder="Image URL (If applicable)"
                value={img_url}
                onChange={(e) => setImgUrl(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddPost;
