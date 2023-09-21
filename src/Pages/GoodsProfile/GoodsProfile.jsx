import styles from './GoodsProfile.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageSlider from '../../UI/ImageSlider';

const GoodsProfile = () =>{
    let params = useParams();
    const goodsList = useSelector(state => state.goods.goodsArray)
    const goodsItem = goodsList.find((item) => item.product.id === params.goodsID);
  
   
    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                <ImageSlider images={goodsItem.product.images} />
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.topic}>
                    {goodsItem.product.id} {goodsItem.product.name}
                </div>

                <div className={styles.price}>
                    {goodsItem.product.price} грн
                </div>

                <div className={styles.material}>
                    Матеріал:  {goodsItem.product.material}
                </div>

                <div className={styles.size}>
                    Розмір: {goodsItem.product.size}
                </div>

                <div className={styles.buyButton}>
                    <button>
                        Додати у кошик
                    </button>
                </div>
            </div>
        </div>
    )

}

export default GoodsProfile;