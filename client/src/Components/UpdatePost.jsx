import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./CSS/UpdatePost.css";
import api from '../api';


const UpdatePost = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            //console.log(`${id}, ${title}, ${content}`)
            api.put(`/api/posts/${id}`, { title: title, /*img_url: "UPDATED",*/ content: content });
            //api.put(`/api/posts/${id}`, { title: "UPDATED", img_url: "UPDATED", created_by: "UPDATED by", content: "UPDATED" });
            navigate("/posts")
        } catch (error) {
            console.error('Failed to update post', error);
        }
    }

    return (
        <div>
            <h1>test</h1>
            <br />

            <form onSubmit={submitForm}>
                <h2>Edit Post</h2>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdatePost;
