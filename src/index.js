import './index.css';
import React from 'react';
import { Provider } from './context/books';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <Provider>
        <App />
    </Provider>
);