import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import Header from './components/Header/Header';
import Signin from './Pages/Signin/Signin';
import BooksList from './Pages/BookList/BooksList';
import Book from "./Pages/Book/Book";
import Footer from "./components/Footer/Footer";
import {Context} from "./components/Contex";

import './App.css';
import booksList from "./assets/books.json";

function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setLogged] = useState(false);
  
  return (
    <Context.Provider value = {{userName, setUserName, isLogged, setLogged}}>
      <BrowserRouter>
        <div className="App">
          <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="signin" />}/>
          <Route path="signin" element={<Signin />} />
          <Route path="books-list" element={<BooksList booksList={booksList} />} />
          <Route path="books-list/:id" element={<Book booksList={booksList} />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
