import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, redirect
} from "react-router-dom";

import Header from './components/Header/Header';
import Signin from './Pages/Signin/Signin';
import BooksList from './Pages/BookList/BooksList';
import SpecificBook from "./Pages/SpecificBook/SpecificBook";
import Footer from "./components/Footer/Footer";
import Cart from './Pages/Cart/Cart';
import {Context} from "./context/Contex";
import { OrderContext, arrayBooksType } from './context/OrderContext';

import './App.css';
import booksList from "./assets/books.json";

function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setLogged] = useState(false);
  const [orderBooks, setBooks] = useState<Array<arrayBooksType>>([]);

  const redirectWithoutAuth = (component: JSX.Element) => {
    return (
      <>
        {isLogged ? component : <Navigate to="/signin" />}
      </>
    );
  }
  
  return (
    <Context.Provider value = {{userName, setUserName, isLogged, setLogged}}>
      <OrderContext.Provider value = {{orderBooks, setBooks, booksList}}>
        <BrowserRouter>
          <div className="App">
            <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="signin" />}/>
            <Route path="signin" element={<Signin />} />
            <Route path="books" element={redirectWithoutAuth(<BooksList />)} />
            <Route path="books/:id" element={redirectWithoutAuth(<SpecificBook />)} />
            <Route path="cart" element={redirectWithoutAuth(<Cart />)} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
      </OrderContext.Provider>
    </Context.Provider>
  );
}

export default App;
