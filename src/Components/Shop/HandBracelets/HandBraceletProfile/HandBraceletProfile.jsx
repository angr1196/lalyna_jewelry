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

                <div>
                    {handBraceletItem.id} {handBraceletItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {handBraceletItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {handBraceletItem.product.material}
                </div>

                <div>
                {handBraceletItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default HandBraceletProfile;