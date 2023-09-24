import styles from './Chains.module.css'
import GoodsList from '../../Components/GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchChains } from '../../store/slices/goodsSlice'
import Preloader from '../../UI/Preloader'



const Chains = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchChains());
    }, []);

    const productList = useSelector(state => state.goods.goodsArray);

    const isFetching = useSelector(state => state.goods.isFetching)

    return (
        <div className={styles.container}>
            {isFetching && <Preloader />}
            <GoodsList productList={productList} />
        </div>
    )
}

export default Chains;
