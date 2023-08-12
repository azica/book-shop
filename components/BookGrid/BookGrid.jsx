import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/books/bookActions';
import Loader from '../utils/Loader';

const BookGrid = () => {
	const dispatch = useDispatch()
	const {books, isLoading } = useSelector(state=>state?.books)
	const {columnView, currentItemsPerPage} = useSelector(state=>state?.bookSort)
	
	useEffect(()=>{
		dispatch(fetchBooks(currentItemsPerPage))
	}, [])

	return (
		<>
		{
			isLoading ? 
				<Loader/>
			:
			<>
				{
					books.length == 0 ?
					<h2>There is no such books</h2>
					:
					<div className={`bookGrid ${columnView? 'gridColumn': 'gridRow'}`}>
						{books?.map(book=><BookCard key={book.id} book={book}/>)}
					</div>
				}
			</>
		}
		</>
	);
}

export default BookGrid;
