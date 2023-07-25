
import React, {useState, useEffect} from "react"
import styles from './Carousel.module.css'
import photo1 from '../../assets/images/introImg.jpg'
import photo2 from '../../assets/images/introImg2.jpg'
import photo3 from '../../assets/images/introImg.jpg'

const img = [
  <img key={1} src={photo1} />,
  <img key={2} src={photo2} />,
  <img key={3} src={photo3} />,
]

const Carousel = () => {

// Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 10000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

return (
    <div className={styles.slider}>
        <div className={[`${styles.sliderImg} ${styles.sliderImgPrev}`]}
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="sliderImg"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className={[`${styles.sliderImg} ${styles.sliderImgNext}`]}
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
)
  };

  export default Carousel;