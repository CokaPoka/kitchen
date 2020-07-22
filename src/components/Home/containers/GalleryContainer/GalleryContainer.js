import React, { useState } from 'react';
import './GalleryContainer.css'
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import Photo from './Photo/Photo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coverAlbumVideo from '../../../../animations/anmEdina.mp4';

const GalleryContainer = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (e, photo) => {
        const index = photos.map(function (element) {
            return element.id
        }).indexOf(photo.id)
        setCurrentImage(index);
        setViewerIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    AOS.init()

    return (
        <div id="gallery-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
            <h1 style={{paddingBottom:"15px"}}>Galerija</h1>
            <div className="albums">
                <div class="wrapper">
                    <input type="checkbox" />
                        <div class="video">
                        <video src={coverAlbumVideo} playsInline autoPlay muted loop></video>
                        </div>
                        <div class="text">
                            <span data-text="See animation gallery"></span>
                        </div>
                </div>
                <div class="wrapper">
                    <input type="checkbox" />
                    <div class="video">
                        <img className="cover-img" src={`${process.env.PUBLIC_URL} /img/MERE-cover.jpg`} alt="2d-img"></img>
                    </div>
                    <div class="text">
                        <span data-text="See 2D gallery"></span>
                    </div>
                </div>
            </div>
            <div className="photo-list">
                {photos.map(photo => <Photo key={photo.id} photo={photo} openLightbox={openLightbox} />)}
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div >
    );

}

export default GalleryContainer

