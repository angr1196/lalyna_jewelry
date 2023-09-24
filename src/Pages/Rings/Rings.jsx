
import styles from './Rings.module.css'
import GoodsList from '../../Components/GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRings } from '../../store/slices/goodsSlice'
import Preloader from '../../UI/Preloader'


const Rings = () => {

    const isFetching = useSelector(state => state.goods.isFetching)

    const productList = useSelector(state => state.goods.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchRings());
    }, []);

    return (
        <div className={styles.container}>
            {isFetching && <Preloader/>}
            <GoodsList productList={productList} />
        </div>
    )
}

export default Rings;
