import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, redirect
} from "react-router-dom";

import Header from './components/Header/Header';
import Signin from './Pages/Signin/Signin';
import BooksList from './Pages/BookList/BooksList';
import SpecificBook from "./Pages/SpecificBook/SpecificBook";
import Footer from "./components/Footer/Footer";
import Cart from './Pages/Cart/Cart';
import Page404 from './Pages/Page404/Page404';
import { UserContext } from "./context/UserContex";
import { BooksContext, arrayBooksType } from './context/BooksContext';

import './App.css';
import booksList from "./assets/books.json";

type localUserType = {
  userName: string,
  isLogged: boolean,
}

function App() {
  //перевірка чи є збереженний користувач в localStorage
  const localUser = window.localStorage.getItem("bookStoreUser");
  const savedUser: localUserType = localUser ? JSON.parse(localUser) : "";

  //стейт для контекстів користувача та книжок
  const [userName, setUserName] = useState(savedUser.userName || "");
  const [isLogged, setLogged] = useState(savedUser.isLogged || false);
  const [orderBooks, setBooks] = useState<Array<arrayBooksType>>([]);

  //перевірка чи залогінен користувач
  const redirectWithoutAuth = (component: JSX.Element) => {
    return (
      <>
        {isLogged ? component : <Navigate to="/signin" />}
      </>
    );
  }

  //зміна даних користувача в localStorage
  useEffect(() => {
    const savedUser = {
      userName: userName,
      isLogged: isLogged,
    };
    window.localStorage.setItem("bookStoreUser", JSON.stringify(savedUser));
  }, [isLogged]);
  
  return (
    <UserContext.Provider value = {{userName, setUserName, isLogged, setLogged}}>
      <BooksContext.Provider value = {{orderBooks, setBooks, booksList}}>
        <BrowserRouter>
          <div className="App">
            <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="signin" />}/>
            <Route path="signin" element={<Signin />} />
            <Route path="books" element={redirectWithoutAuth(<BooksList />)} />
            <Route path="books/:id" element={redirectWithoutAuth(<SpecificBook />)} />
            <Route path="cart" element={redirectWithoutAuth(<Cart />)} />
            <Route path="*" element={ <Page404 /> } />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
      </BooksContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
