import styles from './HandBraceletProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';




const HandBraceletProfile = () => {

    let params = useParams();

    const handBraceletsList = useSelector(state => state.handBracelets.goodsArray) 

    const handBraceletItem = handBraceletsList.find((item) => item.product.id === params.handBraceletID);



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={handBraceletItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div className={styles.topic}>
                    {handBraceletItem.id} {handBraceletItem.product.name}
                </div>
              
                <div className={styles.price}>
                   {handBraceletItem.product.price} грн
                </div>
               

                <div className={styles.material}>
                    Матеріал:  {handBraceletItem.product.material}
                </div>

                <div className={styles.size}>
                Розмір: {handBraceletItem.product.size}
                </div>
            </div>
        </div>
    )

}

export default HandBraceletProfile;