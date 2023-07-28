import { createSlice } from '@reduxjs/toolkit'
import photo1 from '../../assets/images/itemsPhoto/rings_photo.jpg'


let photoUrl ='https://firebasestorage.googleapis.com/v0/b/lalyna-project.appspot.com/o/rings_photo.jpg?alt=media&token=86fa3d30-241a-414d-9f14-f864ca9f5bf7'

const initialState = {
    goodsList: [ {
        id: '5',
        category: 'chains',
        name: 'Ланцюжок',
        photo: photoUrl,
        price: '5000 UAH'
    },
    {
        id: '63',
        category: 'chains',
        name: 'Ланцюжок ще',
        photo: photo1,
        price: '1000 UAH'
    },
    {
        id: '454',
        category: 'chains',
        name: 'Новий ланцюжок',
        photo: photoUrl,
        price: '9000 UAH'
    },]
}

const chainsSlice = createSlice({
    name: 'chains',
    initialState,
    reducers: {
        setChains(state) {
            state.goodsList = [
                {
                    id: '5',
                    name: 'Ланцюжок',
                    photo: photoUrl,
                    price: '5000 UAH'
                },
                {
                    id: '63',
                    name: 'Ланцюжок ще',
                    photo: photoUrl,
                    price: '1000 UAH'
                },
                {
                    id: '454',
                    name: 'Новий ланцюжок',
                    photo: photoUrl,
                    price: '9000 UAH'
                },
            ]
        },
    }
})

export const chainsActions = chainsSlice.actions;
export default chainsSlice;