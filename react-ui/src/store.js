import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productsSlice from '../src/_reducers/productsSlice'


const store = configureStore({
    reducer: {
        products: productsSlice,
    }
})





export default store;