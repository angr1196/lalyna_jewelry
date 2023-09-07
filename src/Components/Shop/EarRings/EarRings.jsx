import styles from './EarRings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarRings } from '../../../store/slices/earRingsSlice'
import NoGoods from '../NoGoods/NoGoods'

const EarRings = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarRings());
    }, []);

    const productList = useSelector(state => state.earRings.goodsArray);

    return (
        <div className={styles.container}>
          {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
        </div>
    )
}

export default EarRings;
