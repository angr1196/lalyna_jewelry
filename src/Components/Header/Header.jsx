import styles from './Header.module.css'
import burgerIcon from '../../assets/images/burger_icon.svg'
import logo from '../../assets/images/lalynaLogo.svg'
import cart from '../../assets/images/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Backdrop from '../UX/Backdrop'

let Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const onOpenHandler = () => {
        setIsOpen(true);
    }

    const onCloseHandler = () => {
        setIsOpen(false);
    }


    return (
        <header className={styles.container}>
            <div className={styles.navMobile}>
                <button className={styles.burgerButton} onClick={onOpenHandler} >
                    <img className={styles.burger} src={burgerIcon} alt="#" />
                </button>
                {isOpen &&
                    <Backdrop >
                        <Navbar onClose={onCloseHandler} />
                    </Backdrop>}

                <NavLink to={'/'} className={styles.logoWrapper}>
                    <img className={styles.logo} src={logo} alt="#" />
                </NavLink>
                <button className={styles.languageButton}>
                    UA
                </button>
            </div>

            <div className={styles.navDesktop}>
                <div>

                </div>
                <NavLink to={'/'} className={styles.logoWrapper}>
                    <img className={styles.logo} src={logo} alt="#" />
                </NavLink>
                <button className={styles.cartButton}>
                    UA
                </button>

                <Navbar />

            </div>

        </header>
    )
}

export default Header;