import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './ImageSlider.module.css'; // Импортируем модульные стили

const ImageSlider = ({ images }) => {
  // Преобразуем массив изображений в массив объектов, ожидаемых компонентом ImageGallery
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  // Опции для карусели
  const carouselOptions = {
    // showThumbnails: false, // Убираем миниатюры
    showPlayButton: false, // Убираем кнопку "Play"
    // showFullscreenButton: false, // Убираем кнопку "Fullscreen"
  };

  return (
    <div className={styles['image-carousel-container']}>
      <ImageGallery items={galleryImages} {...carouselOptions} />
    </div>
  );
};

export default ImageSlider;