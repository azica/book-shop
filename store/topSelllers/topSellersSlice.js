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
		[fetchTopSellers.fulfilled]:(state, action) => {
			state.topSellers = action.payload
		}
	}
})

// Reducers 
export const topSellerSelector = (state) => state.topSellers

export default TopSellersSlice.reducer
