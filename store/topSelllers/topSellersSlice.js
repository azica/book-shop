import { createSlice } from "@reduxjs/toolkit";
import { fetchTopSellers } from "./topSellersAction";

const initialState = {
	topSellers: [],
	isLoading: false,
	isSuccess: false,
	errorMessage: ''
}

export const TopSellersSlice = createSlice({
	name: "topSellers",
	initialState,
	reducers: {

	},
	extraReducers: {
		[fetchTopSellers.pending]:(state, action) => {
			state.isLoading = true
		},
		[fetchTopSellers.fulfilled]:(state, action) => {
			state.isLoading = false
			state.topSellers = action.payload
		},
		[fetchTopSellers.rejected]:(state, action) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},

	}
})

// Selector
export const TopSellerSelector = (state) => state.topSellers

// Reducer
export default TopSellersSlice.reducer
