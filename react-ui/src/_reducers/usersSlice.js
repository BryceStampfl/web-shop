import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import setJWTToken from '../_utils/setJwtToken'
import axios from 'axios'


const apiUrl = 'http://localhost:8080/api/users'

const initialState = {
    validToken: null,
    user: {}
}

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async (user) => {
        const response = await axios.post(`${apiUrl}/register`, user)
        return response.data;
    }
)

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (loginData) => {
        const response = await axios.post(`${apiUrl}/login`, loginData)
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state = action.payload
        },
        logout: (state, action) => {
            state = initialState;
        },
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, action) => {
            console.log(`User registered fulfilled!`)

        },
        [registerUser.rejected]: (state, action) => {
            console.log(`User not registered: rejected`)
        },
        [loginUser.fulfilled]: (state, response) => {
            const token = response.payload.token

            localStorage.setItem("jwtToken", token);
            // console.log(`Jwt token: ${token}`)
            setJWTToken(token);
            console.log("Token set")
            state.validToken = response.payload.successful
            state.user = response.meta.arg.username
            // do jwt_decode
        }
    }
})




export const { setCurrentUser, logout } = usersSlice.actions;

export default usersSlice.reducer