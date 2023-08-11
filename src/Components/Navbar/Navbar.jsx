import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/images/closeIcon.svg'
import { useState } from 'react';


let Navbar = (props) => {

   const shopMenu = (
   <div className={styles.shopMenu} onClick={props.onClose}>
        <div>
            <NavLink to={'/chains'}>ЛАНЦЮЖКИ</NavLink>
        </div>
        <div>
            <NavLink to={'/earRings'}>СЕРЕЖКИ</NavLink>
        </div>
        <div>
            <NavLink to={'/earCuffs'}>КАФИ</NavLink>
        </div>
        <div>
            <NavLink to={'/locations'}>БРАСЛЕТИ НА РУКУ</NavLink>
        </div>
        <div>
            <NavLink to={'/locations'}>БРАСЛЕТИ НА НОГУ</NavLink>
        </div>
        <div>
            <NavLink to={'/rings'}>КІЛЬЦЯ</NavLink>
        </div>
        <div>
            <NavLink to={'/bijouterie'}>БІЖУТЕРІЯ</NavLink>
        </div>
    </div>
   )
   
    const [isShopOpen, setIsShopOpen] = useState(false);

    const onToggleShopHandler = () => {
        setIsShopOpen(!isShopOpen)
    }


    return (
        <div className={styles.container}>
            <button className={styles.closeButton} onClick={props.onClose}>
                <img src={closeIcon} alt="" />
            </button>

            <nav className={styles.NavbarBlock}>

                <div>
                    <a onClick={onToggleShopHandler} >МАГАЗИН</a>
                    {/* <NavLink to={'/shop'}>МАГАЗИН</NavLink> */}
                </div>
                {isShopOpen && shopMenu}


                <div onClick={props.onClose}>
                    <NavLink to={'/sales'}>РОЗПРОДАЖ</NavLink>
                </div>
                <div onClick={props.onClose}>
                    <NavLink to={'/care'}>ПРАВИЛА ДОГЛЯДУ</NavLink>
                </div>
                <div onClick={props.onClose}>
                    <NavLink to={'/contacts'}>КОНТАКТИ</NavLink>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;