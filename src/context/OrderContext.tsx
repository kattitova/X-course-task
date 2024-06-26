import React from "react";

export type contextType = {
    orderBooks: Array<arrayBooksType>,
    setBooks: React.Dispatch<React.SetStateAction<contextType["orderBooks"]>>,
    booksList: bookListType,
}

export type arrayBooksType = {
    bookID: number,
    count: number,
}

export type bookListType = {
    books: Array<bookType>,
}

export type propsType = {
    booksList: {
        books: Array<bookType>,
    },
};

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

export const OrderContext = React.createContext<contextType | null>(null);