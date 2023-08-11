import { createSlice } from "@reduxjs/toolkit"
import { fetchBooks, fetchOneBook, fetchFilterBooks } from './bookActions';


const bookCategies = ["Fiction", "Florists", "Vendetta", "romance", "contemporary",
"humorous", "trillers", "horror", 'nutrition']


const initialState = {
	books: [],
	sortedBooks: [],
	currentPage: 1,
	isLoading: true,
	isSuccess: false,
	errorMessage: '',
	categories: bookCategies,
	book: {}
}

export const BookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setSortedBooks: (state, action)=> {
			state.books = action.payload
		}
	},
	extraReducers: {
		[fetchBooks.fulfilled]:(state, action) => {
			state.books = action.payload
		},
		[fetchOneBook.pending]: (state)=>{
			state.isLoading = true
		},
		[fetchOneBook.fulfilled]:(state, action)=>{
				state.isLoading = false
				state.book = action.payload	
		},
		[fetchFilterBooks.fulfilled]: (state, action)=> {
			state.books = action.payload	
		}
	}
})
// Selector
export const BookSelector = (state)=>state.books

// Actions 
export const {setSortedBooks} = BookSlice.actions

// Reducer
export default BookSlice.reducer
