import styles from './Footer.module.css'
import logo from '../../assets/images/lalynaLogo.svg'

const Footer = () => {

    return (
        <div className={styles.container}>
           
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.links}>
                    <a href="https://www.facebook.com/lalyna.jewelry/" target="_blank">
                            Facebook  
                    </a>
                    |
                    <a href="https://www.instagram.com/lalyna.jewelry/" target="_blank">
                              Instagram
                    </a>
                </div>
            
        </div>
    )
}

export default Footer;