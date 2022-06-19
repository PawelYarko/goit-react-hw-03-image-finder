import { createPortal } from 'react-dom';
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({searchRequest}) =>{
    // searchRequest.map(img=>{
    //     console.log(img)
    // })
    return (
        searchRequest.hits.map(el=> {
            <li className={s.item}>
                <img className={s.image} src={el.webformatURL} alt="" />
            </li>
            })
    )
            
        
        
        
}

export default ImageGalleryItem;