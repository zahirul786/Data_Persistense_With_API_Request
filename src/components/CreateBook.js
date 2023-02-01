import { useState } from 'react';
import useBooksContext from '../hooks/hooks';
function CreateBook() {
    const { createBook } = useBooksContext();
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleChange = (title) => {
        setTitle(title.target.value);
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Create</label>
                <input className="input" value={title} onChange={handleChange} required />
                <button className="button" >Click!</button>
            </form>
        </div>
    );
}
export default CreateBook;