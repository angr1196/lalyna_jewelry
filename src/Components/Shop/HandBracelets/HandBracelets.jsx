import styles from './HandBracelets.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchHandBracelets } from '../../../store/slices/handBraceletsSlice'


const HandBracelets = () => {

    

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchHandBracelets());
    }, []);

    const productList = useSelector(state => state.handBracelets.goodsArray);

    return (
        <div className={styles.container}>
            
            <GoodsList productList={productList} />
        </div>
    )
}

export default HandBracelets;