import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import booksList from "../assets/books.json";

export type booksContextType = {
    orderBooks: Array<arrayBooksType> | [],
    setBooks: React.Dispatch<React.SetStateAction<booksContextType["orderBooks"]>>,
    booksList: bookListType,
}

export const BooksContext = React.createContext<booksContextType | null>(null);

type Props = {
    children: string | JSX.Element | JSX.Element[],
  }

export function BooksContextProvider({children}: Props) {
    const [savedUser] = useLocalStorage("bookStoreUser");
    const [orderBooks, setBooks] = useState(savedUser.orderBooks);

    return (
        <>
            <BooksContext.Provider value = {{orderBooks, setBooks, booksList}}>
                { children }
            </BooksContext.Provider>
        </>
    );
}

export type arrayBooksType = {
    bookID: number,
    count: number,
}

export type bookListType = {
    books: Array<bookType>,
}

export type bookType = {
    id: number,
    author: string,
    price: number,
    image: string,
    title: string,
    level: string,
    tags: string[],
    amount?: number,
    shortDescription: string,
    description: string,
};