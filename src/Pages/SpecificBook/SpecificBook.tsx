import { useContext } from "react";
import { useParams } from "react-router-dom";
import BookCountBlock from "../../components/BookCountBlock/BookCountBlock";
import BookImage from "../../components/BookImage/BookImage";
import "./SpecificBook.css";
import imgNotFound from "../../assets/images/imageNotFound.png";

import { BooksContext, booksContextType, bookType } from "../../context/BooksContext";

export default function SpecificBook() {
    const {booksList} = useContext(BooksContext) as booksContextType;
    
    const { id } = useParams();
    const book = booksList.books.find(el => el.id === Number(id)) as bookType;

    const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = imgNotFound;
    }
    
    return (
        <div className="single-book">
            <div className="single-book__image">
                <BookImage src={book.image} title={book.title} />
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