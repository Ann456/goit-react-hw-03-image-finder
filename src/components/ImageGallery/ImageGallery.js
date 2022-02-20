import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = ({pictures, imgClick}) => {
    return (
        <ul className={s.imageGallery}>
            {console.log(pictures)}
            {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
                
                <ImageGalleryItem
                    key={id}
                    webformatUrl={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    imgClick={imgClick}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;
