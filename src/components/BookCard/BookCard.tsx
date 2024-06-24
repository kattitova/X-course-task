import {Link} from "react-router-dom";
import imgNotFound from "../../assets/images/imageNotFound.png";
import AddToCart from "../AddToCart/AddToCart";
import "./BookCard.css";

import { bookType } from "../../types/BookTypes";

type propsType = {
    book: bookType,
};
    
export default function BookCard({book} : propsType) {
    return (
        <div className="book-wrapper">
            <div className="book-image-wrapper">
                <Link to={`${book.id}`}>
                    <img className="book-image" src={book.image || imgNotFound} alt={book.title} />
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