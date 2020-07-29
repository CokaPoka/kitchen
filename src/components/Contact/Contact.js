import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import AOS from 'aos';

const Contact = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');

    AOS.init()

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || number === '' || email === '' || message === '') {
            setAlert("Popunite prazna polja.");
        } else {
            emailjs.sendForm('cokapokajelena_gmail_com', 'contact_from', e.target, 'user_0iylAGLRRt4r9xMlJh9Qd')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setAlert('');
            setName('');
            setMessage('');
            setNumber('');
            setEmail('');
        }

    }

    return (
        <div className="contact-wrapper" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
            <div className="contact-header">
                <div className="contact-header-img">
                    <div className="contact-content">
                        <h1>KONTAKTIRAJTE ME</h1>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-container-left">
                    <h1>KONTAKT</h1>
                    <h3>Pošaljite poruku ili pozovite</h3>
                    <h3>+381********</h3>
                    {/* <h3>email: nikolakikovic@gmail.com</h3> */}
                </div>
                <div className="contact-container-right">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <p style={{margin:"2px", color:"red"}}>{alert}</p>
                        <div style={{ width: "630px", display: "flex", justifyContent: "space-between" }}>
                            <input type="text" name="user_name" placeholder="Ime" onInput={(e) => setName(e.target.value)} />
                            <input type="text" name="contact_number" placeholder="Kontakt telefon" onInput={(e) => setNumber(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" name="user_email" placeholder="Email" style={{ width: "630px" }} onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Poruka" onInput={(e) => setMessage(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" value="Pošalji" className="button-send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact