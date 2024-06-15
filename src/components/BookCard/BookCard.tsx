import {Link} from "react-router-dom";
import imgNotFound from "../../assets/images/imageNotFound.png";
import AddToCart from "../AddToCart/AddToCart";
import "./BookCard.css";

type bookType = {
    book:{
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
    }
};
    
export default function BookCard({book} : bookType) {
    return (
        <div className="book-wrapper">
            <div className="book-image-wrapper">
                <Link to={`${book.id}`}>
                    <img className="book-image" src={book.image || imgNotFound} alt={book.title} />
                </Link>
                <AddToCart />
            </div>
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-price">${book.price}</div>
            </div>
        </div>
    );
};