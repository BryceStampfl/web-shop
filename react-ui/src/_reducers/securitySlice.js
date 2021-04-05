import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import setJWTToken from '../_securityUtils/setJwtToken'
import jwt_decode from "jwt-decode";

const initialSecurityState = {
    validToken: false,
    user: {}
}


export const createNewUser = createAsyncThunk(
    'security/createNewUser',
    async (newUser) => {
        const response = await axios.post(`http://localhost:8080/api/products/`,newUser)
        return response.data;
    }
)


export const loginRequest = createAsyncThunk(
    'security/loginRequest',
    async (request) => {
        const response = await axios.post(`http://localhost:8080/api/products/`,request)
        return response.data;
    }
)



const securitySlice = createSlice({
    name: 'security',
    initialState: initialSecurityState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.push(action.payload)
        },
        logout: (state, action) => {
            state = initialSecurityState;
        }
    
    },
    extraReducers: {
        [loginRequest.fulfilled]: (state, action) => {
            const { token } = action.payload.data;
            localStorage.setItem("jwtToken", token);
            setJWTToken(token);
            const decoded = jwt_decode(token);
            // TODO dispatch token to set current user
        }
    }
})


export const { setCurrentUser, logout } = securitySlice.actions;

export default securitySlice.reducer