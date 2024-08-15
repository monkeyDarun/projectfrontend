import React, { useEffect, useState } from 'react';
import './AllBlogs.css';
import axios from 'axios';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    // Async function to fetch blog data
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://projectbackend-k5s4.onrender.com/api/blogs');
            setBlogs(response.data);
        } catch (error) {
            setError('Error fetching blogs');
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false); // Set loading to false whether data is fetched or error occurs
        }
    };

    useEffect(() => {
        fetchBlogs(); // Call the async function to fetch blogs
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="all-blogs-container">
            <h1>All Blog Ideas</h1>
            <div className="blogs-list">
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <h2>{blog.title}</h2>
                            <p><strong>Author:</strong> {blog.author}</p>
                            <p>{blog.content}</p>
                            <p><em>Submitted on {new Date(blog.date).toLocaleDateString()}</em></p>
                        </div>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
        </div>
    );
};

export default AllBlogs;
