import styles from './EarRingProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



const EarRingProfile = () => {

    let params = useParams();

    const earRingsList = useSelector(state => state.earRings.earRingsArray) 

    const earRingItem = earRingsList.find((item) => item.id === params.earRingID);



    return (
        <div>
            <div className={styles.photoBlock}>
                <img src={earRingItem.earRing.photo} alt="" />
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    Артикул: {earRingItem.id}
                </div>
                <div>
                    Назва: {earRingItem.earRing.name}
                </div>
                <div>
                    Ціна: {earRingItem.earRing.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Сережки кільця
                </div>

                <div>
                    Матеріал: медична сталь
                </div>

                <div>
                    Діаметр: 4.5 см
                </div>
            </div>
        </div>
    )

}

export default EarRingProfile;