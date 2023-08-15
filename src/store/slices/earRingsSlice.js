import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';


const initialState = {
    goodsArray: []
}

export const fetchEarRings = createAsyncThunk(
    'earRings/fetchEarRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'earRings'));
        const earRings = querySnapshot.docs.map((doc) => ({
            product: doc.data(),
        }));
        return earRings;
    }
);

const earRingsSlice = createSlice({
    name: 'earRings',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarRings.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})

export const earRingsActions = earRingsSlice.actions;
export default earRingsSlice;