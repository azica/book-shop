import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedBooks } from '../store/books/bookActions'
import Link from 'next/link'

const listSearch = () => {
	const {query} = useRouter()
	const dispatch = useDispatch()
	const {searchList} = useSelector(state=>state.books)

	useEffect(()=>{
		if(query.searchQuery !== '' && query.searchQuery !== undefined) {
			dispatch(fetchSearchedBooks(query.searchQuery))
		}
	}, [query])
  return (
	<div className="searchList__container">
		<ul className="searchList__list">
			{searchList.length==0 ?
			<h2>There is no such books</h2>
			: 
			searchList.map(book=><li key={book.id} className="searchList__item"><Link href={book?.link}>{book.title}</Link></li>)
			}
		</ul>
	</div>
  )
}

export default listSearch