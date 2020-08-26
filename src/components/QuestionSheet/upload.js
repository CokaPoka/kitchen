import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState({});
    const [file2, setFile2] = useState({});
    const [file3, setFile3] = useState({});

    const onChangeHandler = event => {
        setFile(event.target.files[0]);
    }
    const onChangeHandler2 = event => {
        setFile2(event.target.files[0]);
    }
    const onChangeHandler3 = event => {
        setFile3(event.target.files[0]);
    }


    const onClickHandler = () => {
        const formData = new FormData()
        formData.append('myimage1', file);
        formData.append('myimage2', file2);
        formData.append('myimage3', file3);

        console.log(...formData);

        axios.post("http://localhost:4000/questionsheet", formData).then(res => {
            console.log(res.statusText)
        })
    }

    return (
        <div>
            <form onSubmit={onClickHandler}>
                <h2>Upload Files/Images</h2>
                <input type="file" name="myimage1" onChange={onChangeHandler} />
                <input type="file" name="myimage2" onChange={onChangeHandler2} />
                <input type="file" name="myimage3" onChange={onChangeHandler3} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Upload