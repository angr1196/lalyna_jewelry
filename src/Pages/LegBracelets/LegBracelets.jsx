import styles from './LegBracelets.module.css'
import GoodsList from '../../Components/GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchLegBracelets } from '../../store/slices/goodsSlice'


const LegBracelets = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchLegBracelets());
    }, []);

    const productList = useSelector(state => state.goods.goodsArray);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default LegBracelets;