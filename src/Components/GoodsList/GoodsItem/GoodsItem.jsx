import { Link } from 'react-router-dom';
import styles from './GoodsItem.module.css'

const GoodsItem = ({product}) => {

    const url = '/' + product.category + '/' + product.id;

    return (
        <div className={styles.container}>
            <Link to={url} >
                <img src={product.images[0]} alt="" />

                <div className={styles.textBlock}>
                    <h2 className={styles.title}>{product.id} {product.name} </h2>
                    <span className={styles.price}>{product.price} грн</span>
                </div>
            </Link>
        </div>
    )
}

export default GoodsItem;