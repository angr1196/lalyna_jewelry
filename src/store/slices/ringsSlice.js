import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

const initialState = {
    goodsArray: []
}

export const fetchRings = createAsyncThunk(
    'rings/fetchRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'rings'));
        const rings = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return rings;
    }
);

const ringsSlice = createSlice({
    name: 'rings',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRings.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const ringsActions = ringsSlice.actions;
export default ringsSlice;