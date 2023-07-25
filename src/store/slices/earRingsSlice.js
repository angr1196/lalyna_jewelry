import { createSlice } from '@reduxjs/toolkit'
import photo1 from '../../assets/images/itemsPhoto/rings_photo.jpg'


let photoUrl ='https://firebasestorage.googleapis.com/v0/b/lalyna-project.appspot.com/o/rings_photo.jpg?alt=media&token=86fa3d30-241a-414d-9f14-f864ca9f5bf7'

const initialState = {
    goodsList: [  {
        id: '451-62',
        category: 'ear-rings',
        name: 'Сережки кільця',
        photo: photoUrl,
        price: '3000 UAH'
    },
    {
        id: '451-63',
        category: 'ear-rings',
        name: 'Сережки кільця',
        photo: photoUrl,
        price: '2000 UAH'
    },
    {
        id: '451-64',
        category: 'ear-rings',
        name: 'Сережки кільця',
        photo: photoUrl,
        price: '4000 UAH'
    },]
}

const earRingsSlice = createSlice({
    name: 'earRings',
    initialState,
    reducers: {
        setEarRings(state) {
            state.goodsList = [
                {
                    id: '451-62',
                    category: 'ear-rings',
                    name: 'Сережки кільця',
                    photo: photoUrl,
                    price: '3000 UAH'
                },
                {
                    id: '451-63',
                    category: 'ear-rings',
                    name: 'Сережки кільця',
                    photo: photo1,
                    price: '2000 UAH'
                },
                {
                    id: '451-64',
                    category: 'ear-rings',
                    name: 'Сережки кільця',
                    photo: photoUrl,
                    price: '4000 UAH'
                },
            ]
        },
    }
})

export const earRingsActions = earRingsSlice.actions;
export default earRingsSlice;