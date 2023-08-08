
import styles from './Home.module.css'
import introImg from '../../assets/images/introImg.jpg'


const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={introImg} alt="" />
                {/* <Carousel/> */}
            </div>
        </div>
    )
}

export default Home;