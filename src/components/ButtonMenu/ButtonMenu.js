import React from 'react';
import './ButtonMenu.css';

const ButtonMenu = (props) => {

    return (
        <div className="backdrop">
            <p className="close" onClick={props.buttonMenuClose} style={{padding:"0", margin:"0"}}></p>
            <div className="menu2">
                <div><a className="menu2-title" href='/' onClick={props.buttonMenuClose}>Početna</a></div><hr></hr>
                <div><a className="menu2-title" href="/gallery" onClick={props.buttonMenuClose}>Galerija</a></div><hr></hr>
                <div className="menu-item-has-children"><p className="dropdown-title">Blog</p>
                    <div className="dropdown-menu">
                        <div><a className="menu2-title" href="/" onClick={props.buttonMenuClose}>Nesto 1</a></div>
                        <div><a className="menu2-title" href="/" onClick={props.buttonMenuClose}>Nesto 2</a></div>
                    </div>
                </div><hr></hr>
                <div><a className="menu2-title" href="/" onClick={props.buttonMenuClose}>Cena</a></div><hr></hr>
                <div><a className="menu2-title" href="/" onClick={props.buttonMenuClose}>Kontakt</a></div>
            </div>
        </div>
    )
}

export default ButtonMenu