import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import BookGrid from '../components/BookGrid/BookGrid';
import BookFilter from '../components/BookFilter/BookFilter';
import BookSort from '../components/BookSort/BookSort';
import { fetchBooks, fetchFilterBooks } from '../store/books/bookActions';


const BookList = () => {
	const dispatch = useDispatch()
	const [filter, setFilter] = useState([])
	const {currentItemsPerPage} = useSelector(state=>state?.bookSort)
	useEffect(()=>{
		dispatch(fetchBooks(currentItemsPerPage))
	}, [currentItemsPerPage])

	useEffect(()=>{
		const filters = filter.length > 1 ? filter.join(',') : filter.join(' ')
		console.log(filters)
		dispatch(fetchFilterBooks({filters: filters, itemsPerPage: currentItemsPerPage}))
	}, [filter, currentItemsPerPage])



	return (
		<div className="booklist">
			<div className="booklist__container">
				<BookSort/>
				<BookFilter filter={filter} setFilter={setFilter}/>
				<BookGrid/>
			</div>
		</div>
	);
}

export default BookList;
