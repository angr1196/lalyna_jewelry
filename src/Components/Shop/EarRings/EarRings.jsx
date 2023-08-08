import styles from './EarRings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarRings } from '../../../store/slices/earRingsSlice'


const EarRings = () => {

    const list = useSelector(state => state.earRings.earRingsArray);

    const dispatchFunction = useDispatch();

    useEffect(() => {
        dispatchFunction(fetchEarRings());
    }, []);

    return (
        <div className={styles.container}>
            <GoodsList list={list} />
        </div>
    )
}

export default EarRings;
