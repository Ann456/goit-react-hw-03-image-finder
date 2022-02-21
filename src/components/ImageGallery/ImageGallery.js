import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = ({pictures, imgClick}) => {
    return (
        <ul className={s.imageGallery}>
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

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string,
            tags: PropTypes.string,
        })
    ),
    imgClick: PropTypes.func,
};
