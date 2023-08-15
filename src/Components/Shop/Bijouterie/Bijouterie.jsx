import styles from './Bijouterie.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBijouterie } from '../../../store/slices/bijouterieSlice'


const Bijouterie = () => {

    const productList = useSelector(state => state.bijouterie.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchBijouterie());
    }, []);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default Bijouterie;