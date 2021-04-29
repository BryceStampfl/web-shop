import { combineReducers, configureStore } from '@reduxjs/toolkit'

import productsSlice from '../src/_reducers/productsSlice'
import usersSlice from '../src/_reducers/usersSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['productsSlice']
}


const rootReducer = combineReducers({
    products: productsSlice,
    users: usersSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: {
        reducer: persistedReducer
    }
})


export default store;