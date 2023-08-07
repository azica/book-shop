import {useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchBooks} from '../../store/books/bookActions';

const BookGrid = () => {
	const dispatch = useDispatch()
	const {books} = useSelector(state=>state?.books)
	const {columnView, currentItemsPerPage} = useSelector(state=>state?.bookSort)
	useEffect(()=>{
		dispatch(fetchBooks(currentItemsPerPage))
	}, [currentItemsPerPage])


	return (
		<div className={`bookGrid ${columnView? 'gridColumn': 'gridRow'}`}>
			{books?.map(book=><BookCard key={book.id} book={book}/>)}
		</div>
	);
}

export default BookGrid;
