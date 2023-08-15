import { configureStore } from "@reduxjs/toolkit";
import earRingsSlice from './slices/earRingsSlice'
import chainsSlice from './slices/chainsSlice'
import earCuffsSlice from './slices/earCuffsSlice'
import handBraceletsSlice from "./slices/handBraceletsSlice";
import legBraceletsSlice from "./slices/legBraceletsSlice";
import bijouterieSlice from "./slices/bijouterieSlice";
import ringsSlice from "./slices/ringsSlice";

// let store = 
export default configureStore({
    reducer: {
        earRings: earRingsSlice.reducer,
        chains: chainsSlice.reducer,
        earCuffs: earCuffsSlice.reducer,
        handBracelets: handBraceletsSlice.reducer,
        legBracelets: legBraceletsSlice.reducer,
        bijouterie: bijouterieSlice.reducer,
        rings: ringsSlice.reducer,
    }
}
)

// export default store;