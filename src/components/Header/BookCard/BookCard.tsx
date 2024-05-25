import "./BookCard.css";
import imgNotFound from "../../../assets/images/imageNotFound.png";
import AddToCart from "../../AddToCart/AddToCart";

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
                <img className="book-image" src={book.image || imgNotFound} alt={book.title} />
                <AddToCart />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-price">${book.price}</div>
        </div>
    );
};