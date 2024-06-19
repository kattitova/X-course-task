import React from "react";

export type contextType = {
    orderBooks: Array<arrayBooksType>,
    setBooks: React.Dispatch<React.SetStateAction<contextType["orderBooks"]>>,
}

export type arrayBooksType = {
    bookID: number,
    count: number,
}

export const OrderContext = React.createContext<contextType | null>(null);