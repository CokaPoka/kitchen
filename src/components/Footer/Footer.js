import React from 'react';
import './Footer.css';
import AOS from 'aos';

const Footer = () => {

    AOS.init();

    return (
        <div className="footer-wrapper" data-aos="fade-in" data-aos-duration="500" data-aos-delay="30">
            <h1>FOOTER</h1>
        </div>
    );
};

export default Footer