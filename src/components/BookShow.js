import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/hooks';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();
    const handleDeleteChange = () => {
        deleteBookById(book.id);
    };
    const handleEditChange = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = () => {
        setShowEdit(false);
    };
    let content = <h5>{book.title}</h5>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }
    return (<div className="book-show">
        <img alt="photos" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditChange}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteChange}>
                Delete
            </button>
        </div>
    </div>
    )
}
export default BookShow;