
import style from './Contacts.module.css'

let Contacts = (props) => {

    return (
        <div className={style.contacts_wrapper}>
            <div>
                <h2>Зв'яжіться з нами</h2>
            </div>
            <div>
                <h3>Email:</h3>
                <a href="">lalynajewelry@gmail.com</a>
            </div>
            <div>
                <h3>Телефон:</h3>
                <a href="">+380966687807</a>
            </div>
            <div>
                <h3>Також Ви можете нас знайти:</h3>
                <p>Салон краси M.Sha Nail Bar <br /> вул. Євгена Коновальця 36-В</p>
            </div>

        </div>
    )
}

export default Contacts;