import useBooksContext from '../hooks/hooks';
import { useState } from 'react';
function BookEdit({ book, onSubmit }) {
    const { editBookById } = useBooksContext();
    const [text, setText] = useState(book.title);
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, text);
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input onChange={handleChange} value={text} className="input" />
            <button className="button is-primary">save</button>
        </form>
    )
}
export default BookEdit;