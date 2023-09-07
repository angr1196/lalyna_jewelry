import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

const initialState = {
    goodsArray: []
}

export const fetchBijouterie = createAsyncThunk(
    'bijouterie/fetchBijouterie',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'bijouterie'));
        const bijouterie = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return bijouterie;
    }
);

const bijouterieSlice = createSlice({
    name: 'bijouterie',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBijouterie.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const bijouterieActions = bijouterieSlice.actions;
export default bijouterieSlice;