


import image1 from '../../assets/test/image1.jpg';
import image2 from '../../assets/test/image2.jpg'
import image3 from '../../assets/test/image3.jpg'
import image4 from '../../assets/test/image4.jpg'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import styles from './IntroSlider.module.css'; // Создайте этот модуль для стилей



const IntroSlider = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === photos.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 6500); // Интервал в миллисекундах между слайдами (3 секунды)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, photos.length]);

  return (
    <div className={styles['slider-container']}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${styles['slider-slide']} ${
            index === currentIndex ? styles['active'] : ''
          }`}
        >
          <img src={photo} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default IntroSlider;


 