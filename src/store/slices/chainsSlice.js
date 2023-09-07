import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

const initialState = {
    goodsArray: []
}

export const fetchChains = createAsyncThunk(
    'chains/fetchChains',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'chains'));
        const chains = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return chains;
    }
);

const chainsSlice = createSlice({
    name: 'chains',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChains.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const chainsActions = chainsSlice.actions;
export default chainsSlice;