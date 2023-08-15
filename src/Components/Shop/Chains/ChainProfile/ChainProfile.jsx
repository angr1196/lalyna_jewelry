import styles from './ChainProfile.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageSlider from '../../../UX/ImageSlider';

const ChainProfile = () => {

    let params = useParams();

    const chainsList = useSelector(state => state.chains.goodsArray) 

    const chainItem = chainsList.find((item) => item.product.id === params.chainID);



    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                {/* <img src={earRingItem.earRing.images[0]} alt="" /> */}
                {/* <ProductSlider images={earRingItem.earRing.images} /> */}
                {/* <ImageCarousel images={earRingItem.earRing.images} /> */}
                <ImageSlider images={chainItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    {chainItem.product.id} {chainItem.product.name}
                </div>
                {/* <div>
                    Назва: {earRingItem.earRing.name}
                </div> */}
                <div>
                   {chainItem.product.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Матеріал:  {chainItem.product.material}
                </div>

                <div>
                {chainItem.product.description}
                </div>
            </div>
        </div>
    )

}

export default ChainProfile;