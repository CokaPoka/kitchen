import React, { useState } from 'react';
import axios from 'axios';

const File = () => {

    const [file, setFile] = useState({});

    const onChangeHandler = event => {
        setFile(event.target.files[0]);
    }

    const onClickHandler = () => {
        const image = new FormData()
        image.append('image', file)

        axios.post("http://localhost:4000/gallery", image).then(res => { 
                console.log(res.statusText)
            })
    }

    return (
        <div>
            <input type="file" name="image" onChange={onChangeHandler} />
            <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
        </div>
    )
}

export default File