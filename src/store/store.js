import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from './slices/goodsSlice'

let store = configureStore({
    reducer: {
        goods: goodsSlice.reducer,
    }
}
)

export default store;