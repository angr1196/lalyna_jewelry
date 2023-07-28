
import styles from './Contacts.module.css'

let Contacts = (props) => {

    return (
        <div className={styles.contacts_wrapper}>
            <div>
                <h2>Зв'яжіться з нами</h2>
            </div>
            <div className={styles.email}>
                <h3>Email:</h3>
                <a href="mailto:lalynajewelry@gmail.com">lalynajewelry@gmail.com</a>
            </div>
            <div className={styles.phone}>
                <h3>Телефон:</h3>
                <a href="tel:+380966687807">+380966687807</a>
            </div>
            <div className={styles.location}>
                <h3>Також Ви можете нас знайти:</h3>
                <p>Салон краси M.Sha Nail Bar <br /> вул. Євгена Коновальця 36-В</p>
            </div>

        </div>
    )
}

export default Contacts;