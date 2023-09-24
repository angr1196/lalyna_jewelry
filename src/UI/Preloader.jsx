import gif from '../assets/icons/preloader.gif'
import styles from './Preloader.module.css'

const Preloader =()=>{
    
    return(
        <div className={styles.container}>
            <img src={gif} alt="preloader-icon" />
        </div>
    )


}

export default Preloader;