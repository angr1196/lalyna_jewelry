import styles from './EarRings.module.css'
import photo1 from '../../../assets/images/itemsPhoto/rings_photo.jpg'

import GoodsList from '../../GoodsList/GoodsList'
import { useSelector } from 'react-redux'



const earRingsList = [
    {
        id: '451-62',
        name: 'Сережки кільця',
        photo: 'https://firebasestorage.googleapis.com/v0/b/lalyna-project.appspot.com/o/rings_photo.jpg?alt=media&token=86fa3d30-241a-414d-9f14-f864ca9f5bf7',
        price: '3000 UAH'
    },
    {
        id: '451-63',
        name: 'Сережки кільця',
        photo: photo1,
        price: '2000 UAH'
    },
    {
        id: '451-64',
        name: 'Сережки кільця',
        photo: 'https://firebasestorage.googleapis.com/v0/b/lalyna-project.appspot.com/o/rings_photo.jpg?alt=media&token=86fa3d30-241a-414d-9f14-f864ca9f5bf7',
        price: '4000 UAH'
    },

]

const EarRings = () => {


    const list = useSelector(state => state.earRings.goodsList)  

    return (
        <div>
            <GoodsList list={list}/>
        </div>
    )
}

export default EarRings;