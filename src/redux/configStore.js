import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./stores/homeSlice";

const rootReducer = {
    // Khai báo reducer tại đây
    home: homeSlice
}


/**
 * https://viblo.asia/p/tim-hieu-redux-toolkit-phan-3-gDVK2Lj2lLj
 * https://stackoverflow.com/questions/69502147/changing-from-redux-to-redux-toolkit
 * Mặc định đã có redux thunk`
 */
export const store = configureStore({
    reducer: rootReducer
});

export default store