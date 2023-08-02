
import styles from './Home.module.css'
import introImg from '../../assets/images/introImg.jpg'
import Carousel from '../UX/Carousel';

const Home=()=>{

    return(
        <div className={styles.container}>
            <img src={introImg} alt="" />
            {/* <Carousel/> */}
        </div>
    )
}

export default Home;