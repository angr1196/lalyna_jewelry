import styles from './EarRings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarRings } from '../../../store/slices/goodsSlice'


const EarRings = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarRings());
    }, []);

    const productList = useSelector(state => state.goods.goodsArray);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default EarRings;
