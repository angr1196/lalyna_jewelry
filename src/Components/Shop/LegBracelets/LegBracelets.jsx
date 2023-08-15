import styles from './LegBracelets.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchLegBracelets } from '../../../store/slices/legBraceletsSlice'


const LegBracelets = () => {

    const productList = useSelector(state => state.legBracelets.goodsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchLegBracelets());
    }, []);

    return (
        <div className={styles.container}>
            <GoodsList productList={productList} />
        </div>
    )
}

export default LegBracelets;