import BookCard from "../../components/Header/BookCard/BookCard";
import "./BooksList.css";
import booksList from "../../assets/books.json";

export default function BookList() {

    const list = booksList.books.map(book => {
        return (
            <BookCard book={book} key={book.id}/>
        );
    });
    
    return (
        <div className="books-list-wrapper">
            {list}
        </div>
    );
};