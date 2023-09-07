import styles from './GoodsProfile.module.css'
import ImageSlider from '../UX/ImageSlider';

const GoodsProfile = ({ product }) => {

    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                <ImageSlider images={product.images} />
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.topic}>
                    {product.id} {product.name}
                </div>

                <div className={styles.price}>
                    {product.price} грн
                </div>

                <div className={styles.material}>
                    Матеріал:  {product.material}
                </div>

                <div className={styles.size}>
                    Розмір: {product.size}
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