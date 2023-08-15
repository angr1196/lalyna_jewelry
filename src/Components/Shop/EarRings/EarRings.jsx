import styles from './EarRings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarRings } from '../../../store/slices/earRingsSlice'


const EarRings = () => {

    const productList = useSelector(state => state.earRings.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarRings());
    }, []);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default EarRings;
