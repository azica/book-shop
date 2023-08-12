import { createSlice } from "@reduxjs/toolkit"
import { fetchBooks, fetchOneBook, fetchFilteredBooks,fetchSearchedBooks  } from './bookActions';


const bookCategies = ["Fiction", "Florists", "Vendetta", "romance", "contemporary",
"humorous", "trillers", "horror", 'nutrition']


const initialState = {
	books: [],
	currentPage: 1,
	isLoading: true,
	isSuccess: false,
	errorMessage: '',
	categories: bookCategies,
	book: {},
	search: '',
	searchList: []
}

export const BookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setSortedBooks: (state, action)=> {
			state.books = action.payload
		},	
	},
	extraReducers: {
		// Fetch Books 
		[fetchBooks.pending]:(state, action) => {
			state.isLoading = true
		},
		[fetchBooks.fulfilled]:(state, action) => {
			state.isLoading = false
			state.books = action.payload
		},
		[fetchBooks.rejected]:(state, action) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},
		// Fetch Filtered Books
		[fetchFilteredBooks.pending]: (state, action)=> {
			state.isLoading = true	
		},
		[fetchFilteredBooks.fulfilled]: (state, action)=> {
			state.isLoading = false
			state.books = action.payload	
		},
		[fetchFilteredBooks.rejected]: (state, action)=> {
			state.isLoading = false
			state.errorMessage = action.payload	
		},

		// Search Filtered Books
		[fetchSearchedBooks.pending]: (state, action)=> {
			state.isLoading = true	
		},
		[fetchSearchedBooks.fulfilled]: (state, action)=> {
			state.isLoading = false
			state.searchList = action.payload	
		},
		[fetchSearchedBooks.rejected]: (state, action)=> {
			state.isLoading = false
			state.errorMessage = action.payload	
		},

		// Fetch One Book
		[fetchOneBook.pending]: (state)=>{
			state.isLoading = true
		},
		[fetchOneBook.fulfilled]:(state, action)=>{
				state.isLoading = false
				state.book = action.payload	
		},
	}
})
// Selector
export const BookSelector = (state)=>state.books

// Actions 
export const {setSortedBooks} = BookSlice.actions

// Reducer
export default BookSlice.reducer
