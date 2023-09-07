import styles from './Chains.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchChains } from '../../../store/slices/chainsSlice'
import NoGoods from '../NoGoods/NoGoods'


const Chains = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchChains());
    }, []);

    const productList = useSelector(state => state.chains.goodsArray);

    return (
        <div className={styles.container}>
            {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
        </div>
    )
}

export default Chains;
