import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopSellers = createAsyncThunk('topSellers/fetchTopSellers', async function(){
	try {
		const response = await axios.get('https://openlibrary.org/search.json?subject=Fiction, romance,contemporary,humorous,general&limit=10');
		const data = await response.data.docs
		return data
	} catch (e) {

	}
})