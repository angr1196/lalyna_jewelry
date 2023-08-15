import styles from './LegBracelets.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchLegBracelets } from '../../../store/slices/legBraceletsSlice'
import NoGoods from '../NoGoods/NoGoods'


const LegBracelets = () => {

    
    

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchLegBracelets());
    }, []);

    const productList = useSelector(state => state.legBracelets.goodsArray);
    console.log(productList)

    return (
        <div className={styles.container}>
            {productList.length>0?<GoodsList productList={productList} />:<NoGoods/>}
            
        </div>
    )
}

export default LegBracelets;