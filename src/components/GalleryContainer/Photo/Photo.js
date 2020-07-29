import React from 'react'
import './Photo.css'


const Photo = ({ photo, openLightbox }) => {

    return (
        <div className='photo-item'>
            <img src={`http://localhost:4000/${photo.image}`} alt='item-img' onClick={(e) => openLightbox(e, photo)} className="img-gallery"></img>
        </div>
    )
}

export default Photo