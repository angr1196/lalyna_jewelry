import { Link } from 'react-router-dom';
import styles from './GoodsItem.module.css'


const GoodsItem =(props)=>{

    const url = '/' + props.product.category + '/' + props.product.id;

    return(
        // <div className={styles.container}>
        //     <div className={styles.imgWrapper}>
        //         <Link to={url} >
        //         <img src={props.item.earRing.images[0]} alt="" />
        //         </Link>
        //     </div>
        //     <div>
        //         <a>{props.item.id} {props.item.earRing.name} </a>
        //         <br />
        //         <a>{props.item.earRing.price}</a>

        //     </div>

        // </div>
        <div className={styles.container}>
            <Link to={url} >
            <img src={props.product.images[0]} alt="" />
            
        <div className={styles.textBlock}>
            <span>{props.product.id} {props.product.name} </span>
            <br />
            <span className={styles.price}>{props.product.price} грн</span>

        </div>
        </Link>
    </div>
    )
}

export default GoodsItem;