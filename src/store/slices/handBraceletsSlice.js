import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';


const initialState = {
    goodsArray: []
}

export const fetchHandBracelets = createAsyncThunk(
    'handBracelets/fetchHandBracelets',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'handBracelets'));
        const handBracelets = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return handBracelets;
    }
);

const handBraceletsSlice = createSlice({
    name: 'handBracelets',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHandBracelets.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const handBraceletsActions = handBraceletsSlice.actions;
export default handBraceletsSlice;