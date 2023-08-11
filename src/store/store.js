import { configureStore } from "@reduxjs/toolkit";
import earRingsSlice from './slices/earRingsSlice'
import chainsSlice from './slices/chainsSlice'
import earCuffsSlice from './slices/earCuffsSlice'

// let store = 
export default configureStore({
    reducer: {
        earRings: earRingsSlice.reducer,
        chains: chainsSlice.reducer,
        earCuffs: earCuffsSlice.reducer,
    }
}
)

// export default store;