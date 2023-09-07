
import styles from './Home.module.css'
import IntroSlider from '../UX/IntroSlider';
import image1 from '../../assets/test/mobileImages/image1.jpg'
import image2 from '../../assets/test/mobileImages/image2.jpg'
import image3 from '../../assets/test/mobileImages/image3.jpg'
import image4 from '../../assets/test/mobileImages/image4.jpg'

import img1 from '../../assets/test/desktopImages/image1.jpg'
import img2 from '../../assets/test/desktopImages/image2.jpg'
import img3 from '../../assets/test/desktopImages/image3.jpg'

const Home = () => {

    const mobileImages = [image1, image2, image3, image4];
    const desktopImages = [img1, img2, img3];

    return (
        <div className={styles.container}>
            <div className={styles.mobileContent}>
                <IntroSlider photos={mobileImages} />
            </div>

            <div className={styles.desktopContent}>
                <IntroSlider photos={desktopImages} />
            </div>
        </div>
    )
}

export default Home;