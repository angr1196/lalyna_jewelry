import styles from './EarCuffs.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarCuffs } from '../../../store/slices/earCuffsSlice'


const EarCuffs = () => {

   

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarCuffs());
    }, []);

    const productList = useSelector(state => state.earCuffs.goodsArray);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default EarCuffs;