import styles from './HandBracelets.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchHandBracelets } from '../../../store/slices/handBraceletsSlice'
import NoGoods from '../NoGoods/NoGoods'

const HandBracelets = () => {

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchHandBracelets());
    }, []);

    const productList = useSelector(state => state.handBracelets.goodsArray);

    return (
        <div className={styles.container}>
            {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
        </div>
    )
}

export default HandBracelets;