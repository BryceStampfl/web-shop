import { createSlice } from '@reduxjs/toolkit'


const initialProductsState =  [  
    {id: 0, name: '1', price: 10, description: 'testDescrip1' },
    {id: 1, name: '2', price: 20, description: 'testDescrip2' },
    {id: 2, name: '3', price: 30, description: 'testDescrip3' },
    {id: 3, name: '4', price: 40, description: 'testDescrip4' }]
 

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        selectProductById: (state, action) => {
            state.products.find(product => product.id === action.payload)
        }
    }
})

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer