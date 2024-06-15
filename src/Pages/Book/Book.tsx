import { useParams } from "react-router-dom";

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
        <div>Book {book.title}</div>
    );
};