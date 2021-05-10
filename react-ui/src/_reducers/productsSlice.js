import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api/products/'


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(`${apiUrl}`)
        return response.data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            action.payload.map((product) => {
                state.push(product)
            })
        }
    }
})



export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer