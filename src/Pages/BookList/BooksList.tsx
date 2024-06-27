import { useContext, useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import SearchBook from "../../components/SearchBook/SearchBook";
import SortByPrice from "../../components/SortByPrice/SortByPrice";
import "./BooksList.css";

import { BooksContext, booksContextType, bookType } from "../../context/BooksContext";

export default function BookList() {
    const {booksList} = useContext(BooksContext) as booksContextType;

    const [inputValue, setInputValue] = useState("");
    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value.toLowerCase());
    }

    const [selectValue, setSelectValue] = useState("");
    const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value);
    }

    const {books} = booksList;

    const [filteredBookList, setFilteredBookList] = useState(books);

    useEffect(() => {
        const filterData = (book: bookType) => {
            const bookTitleInclude = book.title.toLowerCase().includes(inputValue);
            switch (selectValue) {
                case "1": return book.price < 15 && bookTitleInclude;
                case "2": return book.price >=15 && book.price < 30 && bookTitleInclude;
                case "3": return book.price >=30 && bookTitleInclude;
                default: return inputValue !== "" ? bookTitleInclude : true;
            };
        };
        setFilteredBookList(books.filter(filterData));
    }, [selectValue, inputValue]);

    const list = filteredBookList.map(book => {
        return (
            <BookCard book={book} key={book.id}/>
        );
    });
    
    return (
        <div className="books-list-wrapper">
            <SearchBook searchHandle = { searchHandle } searchValue = { inputValue }/>
            <SortByPrice selectHandle = { selectHandle } selectValue = {selectValue}/>
            <div className="books-list">
                {list.length ? list : "no results"}
            </div>
        </div>
    );
};