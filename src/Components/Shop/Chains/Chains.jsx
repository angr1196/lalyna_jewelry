import styles from './Chains.module.css'
import { useSelector } from 'react-redux'
import GoodsList from '../../GoodsList/GoodsList'

const Chains =()=>{
   

    const list = useSelector(state => state.chains.goodsList)  

    return (
        <div>
            <GoodsList list={list}/>
        </div>
    )
}

export default Chains;