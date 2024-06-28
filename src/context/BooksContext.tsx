import React from "react";

export type booksContextType = {
    orderBooks: Array<arrayBooksType>,
    setBooks: React.Dispatch<React.SetStateAction<booksContextType["orderBooks"]>>,
    booksList: bookListType,
}

export const BooksContext = React.createContext<booksContextType | null>(null);

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