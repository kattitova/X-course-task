import React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Signin from './Pages/Signin/Signin';
import BooksList from './Pages/BookList/BooksList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="books-list" element={<BooksList />} />
        {/* <Route path="two" element={<PageTwo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
