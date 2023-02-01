import useBooksContext from '../hooks/hooks';
import BookShow from './BookShow';
function BookList() {
    const { books } = useBooksContext();
    const renderedBook = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    });
    return <div className="book-list">
        {renderedBook}
    </div>
}
export default BookList;