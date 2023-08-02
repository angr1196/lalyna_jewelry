import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageSlider = ({ images }) => {
  // Преобразуем массив изображений в массив объектов, ожидаемых компонентом ImageGallery
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const carouselOptions = {
    showPlayButton: false, // Убираем кнопку "Play"
  };

  return <ImageGallery items={galleryImages} {...carouselOptions}/>;
};

export default ImageSlider;