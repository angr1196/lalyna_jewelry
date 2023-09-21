import GoodsItem from "../GoodsItem/GoodsItem";
import styles from './GoodsList.module.css'

const GoodsList = ({ productList }) => {

    return (
        <div className={styles.container}>
            {productList.map(item => <GoodsItem key={item.product.id} product={item.product} />)}
        </div>
    )
}

export default GoodsList;