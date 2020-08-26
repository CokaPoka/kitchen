import React from 'react';
import './Home.css';
import video from '../../animations/anmEdina.mp4';
import anmHome from '../../animations/anmHome.mp4';
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
                // var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $("#welcome-container").offset().top - 60
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    // window.location.hash = hash - 60;
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
                    <h1>Projektovanje kuhinja je 100% online. Angažuj talentovanog dizajnera koji će raditi na tvom projektu već danas.</h1>
                    {/* <button className="button type1">SAZNAJ VIŠE</button> */}
                </div>
                <div className="arrow">
                    <a href="#welcome-container">
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </header>
            <main>
                <div id="welcome-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
                    <h1 style={{paddingBottom:"15px"}}>Dobrodošli!</h1>
                    <h3>Želite potpuno novu kuhinju, trpezariju ili dnevni boravak?</h3>
                    <h3>N DESIGN je tu da Vam pomogne da svoje ideje uobličite u enterijer iz snova.</h3>
                    <h3>Usluga onlajn projektovanje kuhinje, trpezarije ili dnevnog boravka je nov, ekonomičan način da dobijete inače skupe usluge profesionalnih dizajnera enterijera po mnogo povoljnijim cenama.</h3>
                </div>
                <div className="home-animation-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
                    <video id="home-animation" playsInline autoPlay muted loop>
                        <source src={anmHome} type="video/webm"></source>
                    </video>
                </div>
                <div>
                    <Packages />
                </div>
            </main>
        </>
    )
}

export default Home