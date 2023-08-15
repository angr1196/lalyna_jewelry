import styles from './BijouterieProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';


const BijouterieProfile = () => {

    let params = useParams();

    const bijouterieList = useSelector(state => state.bijouterie.goodsArray) 

    const bijouterieItem = bijouterieList.find((item) => item.product.id === params.bijouterieID);
  



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                <ImageSlider images={bijouterieItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div className={styles.topic}>
                    {bijouterieItem.product.id} {bijouterieItem.product.name}
                </div>
                <div className={styles.price}>
                   {bijouterieItem.product.price} грн
                </div>
                <div className={styles.material}>
                    Матеріал: {bijouterieItem.product.material}
                </div>
                <div className={styles.size}>
                Розмір: {bijouterieItem.product.size}
                </div>
            </div>
        </div>
    )

}

export default BijouterieProfile;