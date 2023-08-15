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

                <ImageSlider images={chainItem.product.images}/>
            </div>

            <div className={styles.descriptionBlock}>

                <div className={styles.topic}>
                    {chainItem.product.id} {chainItem.product.name}
                </div>
                <div className={styles.price}>
                   {chainItem.product.price} грн
                </div>
                <div className={styles.material}>
                    Матеріал:  {chainItem.product.material}
                </div>

                <div className={styles.size}>
                Розмір: {chainItem.product.size}
                </div>
            </div>
        </div>
    )

}

export default ChainProfile;