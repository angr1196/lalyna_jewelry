import React, { useState } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles['image-carousel']}>
      <div className={styles['main-image']}>
        <img src={images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
      </div>
      <div className={styles['thumbnails-container']}>
        <div className={styles['thumbnails']}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageChange(index)}
              className={index === currentImageIndex ? styles['active'] : ''}
            />
          ))}
        </div>
      </div>
      <button className={styles['prev-button']} onClick={handlePrevClick}>
        &lt;
      </button>
      <button className={styles['next-button']} onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;