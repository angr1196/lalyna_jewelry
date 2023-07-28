import GoodsItem from "./GoodsItem/GoodsItem";
import styles from './GoodsList.module.css'

const GoodsList = (props) => {

    return (
        <div className={styles.container}> 
            {props.list.map(item=><GoodsItem key ={item.id} item={item}/> )}  
        </div>
    )
}

export default GoodsList;