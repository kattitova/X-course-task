import { useParams } from "react-router-dom";
import BookCountBlock from "../../components/BookCountBlock/BookCountBlock";
import "./Book.css";
import imgNotFound from "../../assets/images/imageNotFound.png";

type propsType = {
    booksList: {
        books: Array<bookType>,
    },
};

type bookType = {
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
};

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
                />
            </div>
            <div className="single-book__description">
                {book.description}
            </div>
            {/* <div className="single-book__paper-frame"></div> */}
        </div>
    );
};