import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import Header from './components/Header/Header';
import Signin from './Pages/Signin/Signin';
import BooksList from './Pages/BookList/BooksList';
import SpecificBook from "./Pages/SpecificBook/SpecificBook";
import Footer from "./components/Footer/Footer";
import Cart from './Pages/Cart/Cart';
import Page404 from './Pages/Page404/Page404';

import { UserContext, userContextType } from "./context/UserContex";
import { BooksContext, booksContextType } from './context/BooksContext';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

function App() {
  const user = useContext(UserContext) as userContextType;
  const order = useContext(BooksContext) as booksContextType;

  //викорисовуємо кастомний хук useLocalStorage для збереження даних користувачів в localStorage
  const [, setUserStateLogIn, setUserStateLogOut, updateOrderBooks] = useLocalStorage("bookStoreUser");

  //перевірка чи залогінен користувач
  const redirectWithoutAuth = (component: JSX.Element) => {
    return (
      <>
        {user.isLogged ? component : <Navigate to="/signin" />}
      </>
    );
  }

  //вносить зміну даних користувача в localStorage при залогіненні/разлогіненні
  useEffect(() => {
    const setUser = {
      userName: user.userName,
      isLogged: user.isLogged,
      avatarID: user.avatarID,
      orderBooks: order.orderBooks,
    }
    user.isLogged ? setUserStateLogIn(setUser) : setUserStateLogOut(setUser);
  }, [user.isLogged]);

  //вносить зміни в localStorage, коли оновлюється корзина
  useEffect(() => {
    updateOrderBooks({
      userName: user.userName,
      isLogged: user.isLogged,
      avatarID: user.avatarID,
      orderBooks: order.orderBooks,
    });
  }, [order.orderBooks]);
  
  return (
        <BrowserRouter basename="X-course-task">
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
  );
}

export default App;
