import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import s from './ImageGallery.module.css';

const ImageGallery = ({}) =>{
    return (
        <ul className={s.gallery}>
            <ImageGalleryItem/>
        </ul>
    )
}

export default ImageGallery;