import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmitIdeaBlog.css';
import axios from 'axios'; // Import axios for making HTTP requests

const SubmitIdeaBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://projectbackend-k5s4.onrender.com/api/submit-idea', formData)
            .then(response => {
                setMessage(response.data.message);
                setFormData({ title: '', author: '', content: '' });
                navigate('/all-blogs');
            })
            .catch(error => {
                setMessage('Error submitting blog idea. Please try again.');
            });
    };

    return (
        <div className="submit-idea-blog-container">
            <h1>Submit Your Blog Idea</h1>
            <form className="submit-idea-blog-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Blog Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author Name</label>
                    <input 
                        type="text" 
                        id="author" 
                        name="author" 
                        value={formData.author} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Blog Content</label>
                    <textarea 
                        id="content" 
                        name="content" 
                        value={formData.content} 
                        onChange={handleChange} 
                        rows="10" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Submit Idea</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default SubmitIdeaBlog;
