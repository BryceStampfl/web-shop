import { createSlice } from '@reduxjs/toolkit'

const initialProductsState =  [  
    {name: '1', price: 10, description: 'testDescrip1' },
    {name: '2', price: 20, description: 'testDescrip2' },
    {name: '3', price: 30, description: 'testDescrip3' },
    {name: '4', price: 40, description: 'testDescrip4' }]
 


export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        addProduct: (state, actionaction) => {
            state.products.push(state.payload)
        },
        deleteProduct: state => {
        }
    }
})

export const {addProduct, deleteProduct} = productsSlice.actions;


export default productsSlice.reducer