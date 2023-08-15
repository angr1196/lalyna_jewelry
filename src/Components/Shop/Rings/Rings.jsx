
import styles from './Rings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRings } from '../../../store/slices/ringsSlice'


const Rings = () => {

    const productList = useSelector(state => state.rings.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchRings());
    }, []);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default Rings;
