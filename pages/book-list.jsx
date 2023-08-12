import BookGrid from '../components/BookGrid/BookGrid';
import BookFilter from '../components/BookFilter/BookFilter';
import BookSort from '../components/BookSort/BookSort';

const BookList = () => {

	return (
		<div className="booklist">
			<div className="booklist__container">
				<BookSort/>
				<BookFilter/>
				<BookGrid/>
			</div>
		</div>
	);
}

export default BookList;
