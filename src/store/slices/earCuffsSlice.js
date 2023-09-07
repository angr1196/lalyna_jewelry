import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

const initialState = {
    goodsArray: []
}

export const fetchEarCuffs = createAsyncThunk(
    'earCuffs/fetchEarRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'earCuffs'));
        const earCuffs = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return earCuffs;
    }
);

const earCuffsSlice = createSlice({
    name: 'earCuffs',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarCuffs.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const earCuffsActions = earCuffsSlice.actions;
export default earCuffsSlice;