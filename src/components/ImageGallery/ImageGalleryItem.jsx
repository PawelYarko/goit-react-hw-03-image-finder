import ImageGallery from './ImageGallery'
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({}) =>{
    return (
            <li className={s.item}>
                <img className={s.image} src="" alt="" />
            </li>
    )
}

export default ImageGalleryItem;