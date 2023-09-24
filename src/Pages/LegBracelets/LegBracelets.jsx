import styles from './LegBracelets.module.css'
import GoodsList from '../../Components/GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchLegBracelets } from '../../store/slices/goodsSlice'
import Preloader from '../../UI/Preloader'


const LegBracelets = () => {

    const isFetching = useSelector(state => state.goods.isFetching)

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchLegBracelets());
    }, []);

    const productList = useSelector(state => state.goods.goodsArray);

    return (
        <div className={styles.container}>
            {isFetching && <Preloader/>}
            <GoodsList productList={productList} />
        </div>
    )
}

export default LegBracelets;