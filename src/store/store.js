import { configureStore } from "@reduxjs/toolkit";
import earRingsSlice from './slices/earRingsSlice'
import chainsSlice from './slices/chainsSlice'

// let store = 
export default configureStore({
    reducer: {
        earRings: earRingsSlice.reducer,
        chains: chainsSlice.reducer,
    }
}
)

// export default store;