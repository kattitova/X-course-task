import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import BookImage from "../BookImage/BookImage";
import "./BookCard.css";

import { bookType } from "../../context/BooksContext";

type propsType = {
    book: bookType,
};
    
export default function BookCard({book} : propsType) {
    return (
        <div className="book-wrapper">
            <div className="book-image-wrapper">
                <Link to={`${book.id}`}>
                    <BookImage imgClass = "book-image" src={book.image} title={book.title} />
                </Link>
                <AddToCart bookID={book.id} count={1}/>
            </div>
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-footer">
                    <div className="book-price">${book.price}</div>
                    <Link className="book-view-button" to={`${book.id}`}>View</Link>
                </div>
            </div>
        </div>
    );
};