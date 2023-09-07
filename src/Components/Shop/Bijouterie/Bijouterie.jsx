import styles from './Bijouterie.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBijouterie } from '../../../store/slices/bijouterieSlice'
import NoGoods from '../NoGoods/NoGoods'


const Bijouterie = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchBijouterie());
    }, []);

    const productList = useSelector(state => state.bijouterie.goodsArray);

    return (
        <div className={styles.container}>
            {productList.length > 0 ? <GoodsList productList={productList} /> : <NoGoods />}
        </div>
    )
}

export default Bijouterie;