import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './ImageSlider.module.css'; 

const ImageSlider = ({ images }) => {
 
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const carouselOptions = {
    // showThumbnails: false
    showPlayButton: false, 
    // showFullscreenButton: false
  };

  return (
    <div className={styles['image-carousel-container']}>
      <ImageGallery items={galleryImages} {...carouselOptions} />
    </div>
  );
};

export default ImageSlider;