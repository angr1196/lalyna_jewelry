import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';


const initialState = {
    goodsArray: []
}

export const fetchLegBracelets = createAsyncThunk(
    'legBracelets/fetchLegBracelets',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'legBracelets'));
        const legBracelets = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return legBracelets;
    }
);

const legBraceletsSlice = createSlice({
    name: 'legBracelets',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLegBracelets.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const legBraceletsActions = legBraceletsSlice.actions;
export default legBraceletsSlice;