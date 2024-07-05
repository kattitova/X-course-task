import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContex';
import { BooksContextProvider } from './context/BooksContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
