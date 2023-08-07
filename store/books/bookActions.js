import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://gutendex.com/books/"

export const fetchBooks = createAsyncThunk('books/fetchBooks', async function(currentItemsPerPage){
		try {
			const response = await axios.get(`https://openlibrary.org/search.json?subject=Fiction, romance,contemporary,humorous,general&limit=${currentItemsPerPage}`);
			const data = await response.data
			const booksArray = data.docs.map(book=>{
				
				const bookObj = {
					id: book.key.split('/')[2],
					title: book.title,
					author: book.author_name[0],
					imgUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
					link: `books/${book.key.split('/')[2]}`
					
				}
				return bookObj
			})
			return booksArray
		} catch (e) {

	}
})
export const fetchOneBook = createAsyncThunk('books/fetchOneBook', async function(bookKey){
	try {
		const response = await axios.get(`https://openlibrary.org/works/${bookKey}.json`);
		const data = await response.data;
		const authorData = await axios.get(`https://openlibrary.org${data?.authors[0].author.key}.json`)
		const author = await authorData.data.name
		let date = new Date(data.created.value)
		const bookObj = {
			id: data.key.split('/')[2],
			title: data.title,
			author: author,
			imgUrl: `https://covers.openlibrary.org/b/id/${data?.covers[0]}-L.jpg`,
			subjects: [...data.subjects],
			description: data.first_sentence.value,
			datePublished: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
		}
		return bookObj

	} catch (e) {

	}
})