import styles from './BijouterieProfile.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSlider from '../../../UX/ImageSlider';


const BijouterieProfile = () => {

    let params = useParams();

    const bijouterieList = useSelector(state => state.bijouterie.goodsArray) 

    const bijouterieItem = bijouterieList.find((item) => item.product.id === params.bijouterieID);
    console.log(bijouterieItem)



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={bijouterieItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    {bijouterieItem.product.id} {bijouterieItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {bijouterieItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {bijouterieItem.product.material}
                </div>

                <div>
                {bijouterieItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default BijouterieProfile;