import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://openlibrary.org/search.json'
export const fetchBooks = createAsyncThunk('books/fetchBooks', async function(currentItemsPerPage){
		try {
			const response = await axios.get(`${baseUrl}?subject=Fiction, romance,contemporary,humorous,general&limit=${currentItemsPerPage}`);
			const bookArray = response.data.docs.map(book=> {
				const bookObject = {
					id: book.key.split('/')[2],
					title: book.title,
					imgUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
					author: book.author_name[0],
					link: `/books/${book.key.split('/')[2]}`
				}
				return bookObject
			})
			return bookArray
		} catch (e) {
			return e.message
		}
})
export const fetchOneBook = createAsyncThunk('books/fetchOneBook', async function(id){
	try {
		const response = await axios.get(`https://openlibrary.org/works/${id}.json`)
		const data = await response.data

		const responseOfAuthor = await axios.get(`https://openlibrary.org${data.authors[0].author.key}.json`)

		let date = new Date(data.created.value)
		let img = data.covers == undefined || data.covers.length == 0 ? '': `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
		let subjects = data.subjects== undefined || data.subjects.length == 0 ? []: data.subjects
		let author = responseOfAuthor.data.name

		const book = {
			title: data.title,
			subjects: subjects,
			key: data.key,
			imgUrl: img,
			datePublished: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
			author: author
		}
		
		return book

	} catch (e) {
		return e.message
	}
})
export const fetchFilteredBooks = createAsyncThunk('filter/fetchFilterBooks', async ({filters, currentItemsPerPage}) =>{ 
	try {
		const response = await axios.get(`${baseUrl}?subject=${filters}&limit=${currentItemsPerPage}`);
		const bookArray = response.data.docs.map(book=> {
			let auhorName =  book.author_name == undefined ? '' : book.author_name[0]
			const bookObject = {
				id: book.key.split('/')[2],
				title: book.title,
				imgUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
				author: auhorName,
				link: `/books/${book.key.split('/')[2]}`
			}
			return bookObject
		})
		
		return bookArray.length == 0 ? [] : bookArray

	} catch (e) {
		return e.message
	}
})

export const fetchSearchedBooks = createAsyncThunk('filter/fetchFilterBooks', async (query) =>{ 
	try {
		const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
		const data = response.data

		const bookArray = response.data.docs.map(book=> {
			
			const bookObject = {
				id: book.key.split('/')[2],
				title: book.title,
				link: `/books/${book.key.split('/')[2]}`
			}
			return bookObject
		})
		
		return bookArray.length == 0 ? [] : bookArray

	} catch (e) {
		return e.message
	}
})