import { useParams } from "react-router-dom";
import BookCountBlock from "../../components/BookCountBlock/BookCountBlock";
import "./Book.css";
import imgNotFound from "../../assets/images/imageNotFound.png";

import {propsType, bookType} from "../../types/BookTypes";

export default function Book({booksList} : propsType) {
    const { id } = useParams();
    const book = booksList.books.find(el => el.id === Number(id)) as bookType;
    
    return (
        <div className="single-book">
            <div className="single-book__image">
                <img src={book.image || imgNotFound} alt={book.title}/>
            </div>
            <div className="single-book__info">
                <h2>{book.title}</h2>
                <p>Author(s): {book.author}</p>
                <p>Book level: {book.level}</p>
                <p>Book tags: {book.tags.join(", ")}</p>
            </div>
            <div className="single-book__price">
                <BookCountBlock 
                    price={book.price}
                    bookID={Number(id)}
                />
            </div>
            <div className="single-book__description">
                {book.description}
            </div>
        </div>
    );
};