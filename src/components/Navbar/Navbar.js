import React from 'react';
import './Navbar.css';
import $ from 'jquery';
import logo from '../../img/logoNK.png'

const Navbar =(props)=> {

    let navIcon3 = '';
    if (props.show) {
        navIcon3 = 'open';
    }

    $(document).ready(function () {
        // menu click event
        $('.menuBtn').click(function () {
            $(this).toggleClass('act');
            if ($(this).hasClass('act')) {
                $('.mainMenu').addClass('act');
            }
            else {
                $('.mainMenu').removeClass('act');
            }
        });
    });

   
    return (
        <>
        <nav className="main-navigation">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo-img" />
            </div>
            <ul className="menu">
                <li><a href="/">Početna</a></li>
                <li><a href="/gallery">Galerija</a></li>
                <li><a href="/questionsheet">Počnimo saradnju</a></li>
                {/* <li className="menu-item-has-children"><a href="/blog">Blog</a>
                    <ul className="sub-menu">
                        <li><a href="/">Nesto 1</a></li>
                        <li><a href="/">Nesto 2</a></li>
                    </ul>
                </li>
                <li><a href="/">Cene</a></li> */}
                <li><a href="/contact">Kontakt</a></li>
            </ul>
                <div className="drawer-toggle-button" onClick={props.buttonMenuClickHandler}>
                    <div id="nav-icon3" className={navIcon3}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar