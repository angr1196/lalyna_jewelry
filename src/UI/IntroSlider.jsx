import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import styles from './IntroSlider.module.css';
import classNames from 'classnames';

const IntroSlider = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === photos.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 6500);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, photos.length]);

  return (
    <div className={styles.sliderContainer}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={classNames(styles.sliderSlide,
            index === currentIndex ? styles.active : ''
          )}
        >
          <img src={photo} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default IntroSlider;


