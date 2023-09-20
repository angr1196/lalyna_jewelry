import styles from './Bijouterie.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBijouterie } from '../../../store/slices/goodsSlice'



const Bijouterie = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchBijouterie());
    }, []);

    const productList = useSelector(state => state.goods.goodsArray);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default Bijouterie;