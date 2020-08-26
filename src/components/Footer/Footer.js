import React from 'react';
import './Footer.css';
import Newsletter from '../Newsletter/Newsletter';
import Carousel from 'react-images';

const Footer = () => {

    const images = [{ source: `${process.env.PUBLIC_URL}/img/11.jpg` }, { source: `${process.env.PUBLIC_URL}/img/9.jpg` }, { source: `${process.env.PUBLIC_URL}/img/13.jpg` }]


    return (
        <div className="footer-wrapper">
            <div className="footer-gallery-container">
                <a className="footer-gallery-title" href='/gallery'>GALERIJA</a>
                <div className="footer-carousel">
                    <Carousel views={images}></Carousel>
                </div>
            </div>
            <div className="footer-newsletter-container">
                <Newsletter />
            </div>
        </div>
    );
};

export default Footer