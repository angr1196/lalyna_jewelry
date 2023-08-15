import styles from './EarCuffsProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';


const EarCuffsProfile = () => {

    let params = useParams();

    const earCuffsList = useSelector(state => state.earCuffs.goodsArray) 

    const earCuffItem = earCuffsList.find((item) => item.product.id === params.earCuffID);



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={earCuffItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    {earCuffItem.product.id} {earCuffItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {earCuffItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {earCuffItem.product.material}
                </div>

                <div>
                {earCuffItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default EarCuffsProfile;