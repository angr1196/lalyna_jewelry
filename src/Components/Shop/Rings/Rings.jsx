
import styles from './Rings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRings } from '../../../store/slices/ringsSlice'
import NoGoods from '../NoGoods/NoGoods'

const Rings = () => {

    const productList = useSelector(state => state.rings.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchRings());
    }, []);

    return (
        <div className={styles.container}>
          {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
        </div>
    )
}

export default Rings;
