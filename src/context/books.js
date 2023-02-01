import axios from 'axios';
import { createContext, useState, useCallback } from "react";
const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            else
                return book;
        });
        setBooks(updatedBooks);
    };
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);

    };
    const createBook = async (title) => {
        const response1 = await axios.post('http://localhost:3001/books', {
            title
        });
        const UpdatedBooks = [
            ...books, response1.data
        ];
        setBooks(UpdatedBooks);
    }
    const valueToShare = {
        books,
        createBook,
        deleteBookById,
        editBookById,
        fetchBooks,
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;