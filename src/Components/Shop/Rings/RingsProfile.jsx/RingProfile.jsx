import styles from './RingProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';


const RingProfile = () => {

    let params = useParams();

    const ringsList = useSelector(state => state.rings.goodsArray) 
    
    const ringItem = ringsList.find((item) => item.product.id === params.ringID);




    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={ringItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    {ringItem.product.id} {ringItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {ringItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {ringItem.product.material}
                </div>

                <div>
                {ringItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default RingProfile;