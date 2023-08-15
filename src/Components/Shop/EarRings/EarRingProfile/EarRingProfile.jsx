import styles from './EarRingProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';


const EarRingProfile = () => {

    let params = useParams();

    const earRingsList = useSelector(state => state.earRings.goodsArray) 

    const earRingItem = earRingsList.find((item) => item.product.id === params.earRingID);



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={earRingItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div className={styles.topic}>
                    {earRingItem.product.id} {earRingItem.product.name}
                </div>
              
                <div className={styles.price}>
                   {earRingItem.product.price} грн
                </div>

                <div className={styles.material}>
                    Матеріал:  {earRingItem.product.material}
                </div>

                <div className={styles.size}>
                Розмір: {earRingItem.product.size}
                </div>
            </div>
        </div>
    )

}

export default EarRingProfile;