import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = 'https://custom-db.vercel.app'
export const register = createAsyncThunk('auth/register', async (user, thunkAPI)=> {
	try {
		const {email, password, name} = user
		const resp = await axios.post(`${baseUrl}/register`,{email,password})
		localStorage.setItem("newToken", resp.data.accessToken);
		return name
	} catch (e) {
		return thunkAPI.rejectWithValue(e.response.data)
	}
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI)=> {
	try {
		const {email, password, name} = user
		const resp = await axios.post(`${baseUrl}/login`,{email,password})
		localStorage.setItem("newToken", resp.data.accessToken);
		return name
	} catch (e) {
		return thunkAPI.rejectWithValue(e.response.data)
	}
})

export const logout = createAsyncThunk('auth/logout', async ({email, token}, thunkAPI)=> {
	try {
		const {email, password, name} = user
		const resp = await axios.post(`${baseUrl}/logout`,{email,password})
		localStorage.setremoveItem("newToken");
		return name

	} catch (e) {
		return thunkAPI.rejectWithValue(e.response.data)
	}
})