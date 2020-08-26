import React from 'react'
import './BlogItem.css'


const BlogItem = ({ blog }) => {

    return (
        <div className='blog-item'>
            <img src={`http://localhost:4000/${blog.picture}`} alt='item-img'></img>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
        </div>
    )
}

export default BlogItem