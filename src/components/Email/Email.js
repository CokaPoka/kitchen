// import React from 'react';

// const Email =()=> {
//     return (
//         <div>
//             <form>
//                 <label for="img">Dodajte fotografiju:</label>
//                 <input type="file" id="file" name="img" accept="image/png, image/jpeg"></input>
//                 <label>Email</label>
//                 <input type="email"></input>
//                 <label>Title</label>
//                 <input type="text" />
//                 <label>Message</label>
//                 <textarea rows="4" cols="50">
//                     type something
//                 </textarea>
//                 <input type="submit" value="Send" />
//             </form>

//         </div>
//     )
// }

// export default Email


import axios from 'axios';

import React, { Component } from 'react';

class Email extends Component {

    state = {

        // Initially, no file is selected 
        selectedFile: null,
        title: "proba",
        email: 'jelenakikovic@yahoo.com',
        message: "something"
    };

     
    // On file select (from the pop up) 
    onFileChange = event => {

        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onFileUpload = () => {

        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedFile,
        );
        console.log(...formData);

        // Details of the uploaded file 
        console.log(this.state.selectedFile);

        // Request made to the backend api 
        // Send formData object 
        axios.post("http://localhost:4444/api/v1/contact", formData);
    };

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };
    

    render() {

        return (
            <div>
                <h1>
                    GeeksforGeeks
            </h1>
                <h3>
                    File Upload using React!
            </h3>
                <div>
                    <input type="file" name='myFile' onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default Email;