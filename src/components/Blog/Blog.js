import React, { useState, useEffect } from 'react';
import './Blog.css';
import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from '../../service/Service';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        getBlogs().then(res => res.data.blog).then(data => {
            let sorted = data.sort(function (a, b) {
                return b.date - a.date
            })
            setBlogs(sorted);
        })
    }, [blogs]);

    return (
        <div className="blog-warpper">
            <div className="blog-list">
                {blogs.map(blog => <BlogItem key={blog._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default Blog