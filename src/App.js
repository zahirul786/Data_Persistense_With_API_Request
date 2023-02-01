
import CreateBook from './components/CreateBook';
import { useEffect } from 'react';
import BookList from './components/BookList';
import useBooksContext from './hooks/hooks';
function App() {
    const { fetchBooks } = useBooksContext();
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <h2>Adding List</h2>
            <BookList />
            <CreateBook />
        </div>
    );
}
export default App;