import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../src/_reducers/productsSlice'
import usersSlice from '../src/_reducers/usersSlice'

const store = configureStore({
    reducer: {
        products: productsSlice,
        users: usersSlice,
    }
})





export default store;