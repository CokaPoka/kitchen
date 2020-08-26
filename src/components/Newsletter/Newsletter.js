import React, { useState } from 'react';
import './Newsletter.css';
import emailjs from 'emailjs-com';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (email === '') {
            setAlert("Popunite prazna polja.");
        } else {
            emailjs.sendForm('cokapokajelena_gmail_com', 'contact_from', e.target, 'user_0iylAGLRRt4r9xMlJh9Qd')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setAlert('Hvala! Usprešno ste prijavili za NEWSLETTER.');
            setEmail('');
        }

    }

    return (
        <div className="newsletter-wrapper">
            <form className="newsletter-form" onSubmit={sendEmail}>
                <p style={{ margin: "5px 0", color: "red" }}>{alert}</p>
                <h3 style={{ padding: '5px 0' }}>Prijavi se za NEWSLETTER</h3>
                <div>
                    <input id="newsletter-input-email" type="email" name="user_email" placeholder="Email" onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className="newsletter-button">
                    <input type="submit" value="Pošalji" className="button-send" id="newsletter-button" />
                </div>
            </form>
        </div>
    );
};

export default Newsletter

