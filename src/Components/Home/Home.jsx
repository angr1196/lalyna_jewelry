
import styles from './Home.module.css'
import introImg from '../../assets/images/introImg.jpg'

import IntroSlider from '../UX/IntroSlider';
import image1 from '../../assets/test/image1.jpg'
import image2 from '../../assets/test/image2.jpg'
import image3 from '../../assets/test/image3.jpg'
import image4 from '../../assets/test/image4.jpg'



const Home = () => {

    const images = [image1, image2, image3, image4];


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* <img src={introImg} alt="" /> */}
                <IntroSlider photos={images}/>
            </div>
        </div>
    )
}

export default Home;