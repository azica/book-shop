import { createSlice } from '@reduxjs/toolkit'
import { register, login, logout } from './authAction';

const initialState = {
	user: null, 
	token: null,
	isAuth: false,
	errorMessage: '',
	successMessage: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
	[register.fulfilled]:(state, action) =>{
		state.errorMessage = ''
		state.user = action.payload
		state.isAuth = true
		state.successMessage = 'Congratulations! You have successfully registered for the app!'
	},
	[register.rejected]:(state, action)=> {
		state.user = null
		state.isAuth = false
		state.errorMessage = action.payload
	},


	[login.fulfilled]:(state, action) =>{
		console.log(action.payload)
		state.user = action.payload.name
		state.isAuth = true
		state.successMessage = 'Congratulations! You have successfully logged in for the app!'
	},
	[login.rejected]:(state, action)=> {
		console.log(action.payload)
		state.user = null
		state.isAuth = false
		state.errorMessage = action.payload
	},
  }
});

export const { setCredintials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = state => state.auth.user
export const selectCurrentToken = state => state.auth.token