import BookCard from "../../components/BookCard/BookCard";
import "./BooksList.css";

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

export default function BookList({booksList} : propsType) {

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