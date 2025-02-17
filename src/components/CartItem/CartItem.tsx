import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BooksContext, booksContextType, bookType } from "../../context/BooksContext";
import { FaRegTrashAlt } from 'react-icons/fa';
import "./CartItem.css";
import BookImage from "../BookImage/BookImage";

type propsType = {
    book: bookType,
    count: number,
}

export default function CartItem({ book, count } : propsType) {
    const order = useContext(BooksContext) as booksContextType;
    const deleteItemHandle = (id: number) => {
        // delete book from cart
        order.setBooks(prevState => {
            const arr = prevState.filter(item => item.bookID !== id);
            return arr;
        });
    }

    return (
        <div className="cart__item">
            <BookImage imgClass="cart__item--image" src={book.image} title={book.title} />
            <p><Link to={`/books/${book.id}`}>{ book.title }</Link></p>
            <p>{ book.price }</p>
            <p>{ count }</p>
            <p>{ (count * book.price).toFixed(2) }</p>
            <button className="cart__item--deleteButton" onClick = {() => deleteItemHandle(book.id) } ><FaRegTrashAlt/></button>
        </div> 
    );
}