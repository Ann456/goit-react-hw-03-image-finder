import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatUrl, tags, largeImageURL, imgClick}) =>{
    return (
        <li className={s.imageGalleryItem}>
            <img
                onClick={() => imgClick(largeImageURL)}
                className={s.imageGalleryItemImage}
                src={webformatUrl}
                alt={tags}
            />
        </li>
    );     
};

export default ImageGalleryItem;

