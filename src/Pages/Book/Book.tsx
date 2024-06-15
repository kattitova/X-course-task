import { useParams } from "react-router-dom";
import "./Book.css";
import BookCountBlock from "../../components/BookCountBlock/BookCountBlock";

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
                <img src={book.image} alt={book.title}/>
            </div>
            <div className="single-book__info">
                {book.title}
                Author(s): {book.author}
                Book level: {book.level}
                Book tags: {book.tags.join(", ")}
            </div>
            <div className="single-book__price">
                <BookCountBlock 
                    price={book.price}
                />
            </div>
            <div className="single-book__description">
                {book.description}
            </div>
        </div>
    );
};