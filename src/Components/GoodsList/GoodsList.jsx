import GoodsItem from "./GoodsItem/GoodsItem";
import styles from './GoodsList.module.css'

const GoodsList = (props) => {

    return (
        <div className={styles.container}> 
            {props.productList.map(item=><GoodsItem key ={item.product.id} product={item.product}/> )}  
        </div>
    )
}

export default GoodsList;