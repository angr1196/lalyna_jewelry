import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topic}>
                    <h2>Зв'яжіться з нами</h2>
                </div>

                <div className={styles.contactItem}>
                    <h3>Email:</h3>

                    <a href="mailto:lalynajewelry@gmail.com">lalynajewelry@gmail.com</a>
                </div>

                <div className={styles.contactItem}>
                    <h3>Телефон:</h3>

                    <a href="tel:+380966687807">+380966687807</a>
                </div>

                <div className={styles.contactItem}>
                    <h3>Також Ви можете нас знайти:</h3>

                    <p>
                        м. Київ <br />
                        вул. Євгена Коновальця 36-В <br />
                        Салон краси M.Sha Nail Bar
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;