import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	columnView: false,
	numberOfItems: [5,10,20,30,50],
	currentItemsPerPage: 10,
	sort: ''
}

const BookSortSlice = createSlice({
	name: 'bookSort',
	initialState,
	reducers: {
		setColumnView: (state, action) => {
			state.columnView =  action.payload
		},
		setCurrentItemsPerPage:(state, action)=>{
			state.currentItemsPerPage = action.payload
		}, 
		setSort: (state, action) => {
			state.sort = action.payload
		}

	}
})

// Selector 
export const BookSortSelector = state => state.bookSort

// Actions 
export const {
	setColumnView,
	setCurrentItemsPerPage} = BookSortSlice.actions

// Reducer
export default BookSortSlice.reducer