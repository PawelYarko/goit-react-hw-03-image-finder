import s from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({searchRequest}) =>{
    return (
        searchRequest.hits.map(el=> {
            return (
                <li className={s.item} key={el.id}>
                <img className={s.image} src={el.webformatURL} alt={el.tags} />
            </li>
            )
            })
    )
}

export default ImageGalleryItem;