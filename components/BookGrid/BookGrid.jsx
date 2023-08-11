import {useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';


const BookGrid = () => {
	const {books} = useSelector(state=>state?.books)
	const {columnView} = useSelector(state=>state?.bookSort)
	
	return (
		<div className={`bookGrid ${columnView? 'gridColumn': 'gridRow'}`}>
			{books?.map(book=><BookCard key={book.id} book={book}/>)}
		</div>
	);
}

export default BookGrid;
