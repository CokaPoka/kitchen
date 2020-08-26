import React, { useState, useEffect } from 'react';
import './GalleryContainer.css'
import Carousel, { Modal, ModalGateway } from "react-images";
import Photo from './Photo/Photo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {getPhotos} from '../../service/Service';

const GalleryContainer = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        getPhotos().then(res => res.data.photos).then(data => {
            let sorted = data.sort(function(a,b){
                return b.date - a.date
            })
            setPhotos(sorted);
        })
    }, [photos]);

    const pictures = photos.map(item=>{
        return (
            item = {
               id: item._id,
               src: `http://localhost:4000/${item.image}`
            }
        )
    })

    const openLightbox = (e, photo) => {
        const index = pictures.map(function (element) {
            return element.id
        }).indexOf(photo._id);
        setCurrentImage(index);
        setViewerIsOpen(true);
        console.log(pictures);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    AOS.init()

    const CustomHeader = ({ innerProps, isModal }) => isModal ? (
        <div {...innerProps}>
        </div>
    ) : null;

    return (
        <div id="gallery-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
            <div className="photo-list">
                {photos.map(photo => <Photo key={photo._id} photo={photo} openLightbox={openLightbox} />)}
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel 
                            components={{ Header: CustomHeader }}
                            currentIndex={currentImage}
                            views={pictures.map(x => ({
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

