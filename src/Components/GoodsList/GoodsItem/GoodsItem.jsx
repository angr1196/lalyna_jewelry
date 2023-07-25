import { Link } from 'react-router-dom';
import styles from './GoodsItem.module.css'


const GoodsItem =(props)=>{

    const url = '/' + props.item.category + '/' + props.item.id;

    return(
        <div>
            <div className={styles.imgWrapper}>
                <Link to={url} >
                <img src={props.item.photo} alt="" />
                </Link>
            </div>
            <div>
                <a>{props.item.id} {props.item.name} </a>
                <br />
                <a>{props.item.price}</a>

            </div>

        </div>
    )
}

export default GoodsItem;