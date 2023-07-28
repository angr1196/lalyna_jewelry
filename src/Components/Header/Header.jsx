import styles from './Header.module.css'
import burgerIcon from '../../assets/images/burger_icon.svg'
import logo from '../../assets/images/lalynaLogo.svg'
import cart from '../../assets/images/cart_icon.png'
import { NavLink } from 'react-router-dom'

let Header = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.navMobile}>
                <button className={styles.burgerButton} onClick={props.onOpen} >
                    <img className={styles.burger} src={burgerIcon} alt="#" />
                </button>
                <NavLink  to={'/'} className={styles.logoWrapper}>
                    <img className={styles.logo} src={logo} alt="#" />
                </NavLink>
                <button className={styles.cartButton}>
                    UA
                    {/* <img className={styles.cart} src={cart} alt="#" /> */}
                </button>
            </div>

        </div>
    )
}

export default Header;