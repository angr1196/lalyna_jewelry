import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';


const initialState = {
    goodsArray: [],
}

export const fetchChains = createAsyncThunk(
    'chains/fetchChains',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'chains'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchHandBracelets = createAsyncThunk(
    'handBracelets/fetchHandBracelets',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'handBracelets'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchBijouterie = createAsyncThunk(
    'bijouterie/fetchBijouterie',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'bijouterie'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchEarCuffs = createAsyncThunk(
    'earCuffs/fetchEarRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'earCuffs'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchEarRings = createAsyncThunk(
    'earRings/fetchEarRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'earRings'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchLegBracelets = createAsyncThunk(
    'legBracelets/fetchLegBracelets',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'legBracelets'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

export const fetchRings = createAsyncThunk(
    'rings/fetchRings',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'rings'));
        const response = querySnapshot.docs.map(doc => {return {...doc.data()}});
        return response;
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    // reducers: {
    
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChains.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchHandBracelets.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchBijouterie.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchEarCuffs.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchEarRings.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchLegBracelets.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
            .addCase(fetchRings.fulfilled, (state, action) => {
                state.goodsArray = action.payload;
            })
    }
})



export const goodsActions = goodsSlice.actions;
export default goodsSlice;