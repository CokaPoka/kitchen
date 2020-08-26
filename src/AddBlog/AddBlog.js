import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {

    const [file, setFile] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onChangeHandler = event => {
        setFile(event.target.files[0]);
    }

    const onClickHandler = () => {
        const blog = new FormData()
        blog.append('picture', file)
        blog.append('title', title)
        blog.append('desc', desc)

        axios.post("http://localhost:4000/blog", blog).then(res => {
            console.log(res.statusText)
        })
    }

    return (
        <div>
            <input type="file" name="picture" onChange={onChangeHandler} />
            <input type="text" name="title" placeholder="Naslov" onInput={(e)=> setTitle(e.target.value)} />
            <textarea name="desc" placeholder="Opis" onInput={(e) => setDesc(e.target.value)} />
            <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
        </div>
    )
}

export default AddBlog