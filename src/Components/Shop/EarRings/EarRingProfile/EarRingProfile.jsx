import styles from './EarRingProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageCarousel from '../../../UX/ImageCarousel';
import ImageSlider from '../../../UX/ImageSlider';




const EarRingProfile = () => {

    let params = useParams();

    const earRingsList = useSelector(state => state.earRings.earRingsArray) 

    const earRingItem = earRingsList.find((item) => item.id === params.earRingID);



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={earRingItem.earRing.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    {earRingItem.id} {earRingItem.earRing.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {earRingItem.earRing.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {earRingItem.earRing.material}
                </div>

                <div>
                {earRingItem.earRing.description}
                </div>
            </div>
        </div>
    )

}

export default EarRingProfile;