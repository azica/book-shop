import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk('books/fetchBooks', async function(currentItemsPerPage){
		try {
			const response = await axios.get(`https://openlibrary.org/search.json?subject=Fiction, romance,contemporary,humorous,general&limit=${currentItemsPerPage}`);

		} catch (e) {

	}
})
export const fetchOneBook = createAsyncThunk('books/fetchOneBook', async function(id){
	try {
		
	} catch (e) {
	}
})
export const fetchFilterBooks = createAsyncThunk('filter/fetchFilterBooks', async (filter) =>{ 
	try {

		
	} catch (e) {
		console.log(e)
	}
})