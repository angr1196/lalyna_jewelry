import styles from './EarRingProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



const EarRingProfile = () => {

    let params = useParams();

    const earRingsList = useSelector(state => state.earRings.goodsList) 

    const earRing = earRingsList.find((item) => item.id === params.earRingID);



    return (
        <div>
            <div className={styles.photoBlock}>
                <img src={earRing.photo} alt="" />
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    Артикул: {earRing.id}
                </div>
                <div>
                    Назва: {earRing.name}
                </div>
                <div>
                    Ціна: {earRing.price}
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