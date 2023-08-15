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

                <div>
                    {earRingItem.product.id} {earRingItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {earRingItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {earRingItem.product.material}
                </div>

                <div>
                {earRingItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default EarRingProfile;