import React from 'react';
import './Home.css';
import video from '../../animations/anmEdina.mp4';
import Packages from './containers/Packages/Packages';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    AOS.init()
    

    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top - 60
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash - 60;
                });
            } // End if
        });
    });

    return (
        <>
            <header id="header" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
                <video id="myVideo" playsInline autoPlay muted loop>
                    <source src={video} type="video/webm"></source>
                </video>
                <div className="content">
                    <h1>HOĆU POTPUNO NOVU KUHINJU</h1>
                    <button className="button type1">IZABERI</button>
                </div>
                <div className="arrow">
                    <a href="#packages-container">
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </header>
            <main>
                <div>
                    <Packages />
                </div>
            </main>
        </>
    )
}

export default Home