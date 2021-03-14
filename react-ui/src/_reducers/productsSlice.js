import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const apiUrl = 'localhost:8080'


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        console.log("Starting get for all products")
        const response = await axios.get(`http://localhost:8080/api/products/`)
        console.log("Recieved get for all products")
        console.log(response.data)
        return response.data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        selectProductById: (state, action) => {
            state.find(product => product.id === action.payload)
        },
        selectAllProducts: state => state.products
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            action.payload.map((product) => {
                state.push(product)
            })
        },
        [fetchProducts.pending]: () => {
        },
        [fetchProducts.rejected]: (state, action) => {
        }
    }
})



export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer