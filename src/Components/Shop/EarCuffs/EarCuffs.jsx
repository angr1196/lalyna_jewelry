import styles from './EarCuffs.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarCuffs } from '../../../store/slices/earCuffsSlice'
import NoGoods from '../NoGoods/NoGoods'

const EarCuffs = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarCuffs());
    }, []);

    const productList = useSelector(state => state.earCuffs.goodsArray);

    return (
        <div className={styles.container}>
        {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
        </div>
    )
}

export default EarCuffs;