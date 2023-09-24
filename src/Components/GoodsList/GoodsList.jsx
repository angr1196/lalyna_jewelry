import { memo } from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import styles from './GoodsList.module.css'

const GoodsList = ({ productList }) => {

    return (
        <div className={styles.container}>
            {productList.map(item => <GoodsItem key={item.id} product={item} />)}
        </div>
    )
}

export default memo(GoodsList);