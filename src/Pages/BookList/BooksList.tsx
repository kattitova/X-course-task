import BookCard from "../../components/BookCard/BookCard";
import SearchBook from "../../components/SearchBook/SearchBook";
import SortByPrice from "../../components/SortByPrice/SortByPrice";
import "./BooksList.css";

import {propsType} from "../../types/BookTypes";

export default function BookList({booksList} : propsType) {

    const list = booksList.books.map(book => {
        return (
            <BookCard book={book} key={book.id}/>
        );
    });
    
    return (
        <div className="books-list-wrapper">
            <SearchBook />
            <SortByPrice />
            <div className="books-list">
                {list}
            </div>
        </div>
    );
};