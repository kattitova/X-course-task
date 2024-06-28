import { useState, useContext } from "react";
import { FaCheck } from 'react-icons/fa';
import { BooksContext, booksContextType } from "../../context/BooksContext";

import "./AddToCart.css";

type propsType = {
    bookID: number,
    count: number,
}

export default function AddToCart({bookID, count}:propsType) {
    const {setBooks} = useContext(BooksContext) as booksContextType;

    let [cartButton, setButtonStatus] = useState(false);

    const addToCartHandler = () => {
        setButtonStatus(true);

        setBooks(prevState => {
            const bookIndex = prevState.findIndex(book => book.bookID === bookID);
            if (bookIndex >= 0) {
                prevState[bookIndex].count += count;
                return [...prevState];
            } else return [...prevState, {bookID: bookID, count: count}]
        });
    }

    return (
        <div className="button-cart" onClick={ addToCartHandler }>
            <div className="parent">
                <div className={`block ${cartButton}`}>
                    Add to cart { cartButton && <FaCheck /> }
                </div>
            </div>
        </div>
    );
}
