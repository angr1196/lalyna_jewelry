import styles from './EarRings.module.css'
import GoodsList from '../../GoodsList/GoodsList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEarRings } from '../../../store/slices/earRingsSlice'


const EarRings = () => {

    const list = useSelector(state => state.earRings.earRingsArray);

    const dispatFunction = useDispatch();

    useEffect(() => {
        dispatFunction(fetchEarRings());
    }, []);

    return (
        <div>
            <GoodsList list={list} />
        </div>
    )
}

export default EarRings;
