import { useContext } from "react";
import { BooksContext, booksContextType } from "../../context/BooksContext";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
    const order = useContext(BooksContext) as booksContextType;
    const { orderBooks, setBooks, booksList } = order;

    let totalAmount = 0; 

    const orderList = orderBooks.map((item) => {
        const book = booksList.books.filter((el) => el.id === item.bookID)[0];
        totalAmount += book.price * item.count;

        return (
            <>
                <CartItem 
                    book = { book } 
                    count = { item.count }
                    key = { book.id }
                />
            </>
        );
    });

    const EmptyCart = () => {
        return (
            <>Empty Cart</>
        );
    };

    const purchaseClickHandle = () => {
        //delete all books from cart
        setBooks([]);
    }

    const FullCart = () => {
        return (
            <div className="cart__wrapper">
                <button className="cart__purshaseButton" onClick = {purchaseClickHandle}>Purchase</button>
                <div className="cart__table">
                    <div className="cart__item cart__item--title">
                        <p>Book</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Count</p>
                        <p>Total price</p>
                        <p></p>
                    </div>
                    { orderList }
                </div>
                <div className="cart__total">Total Amount: ${ Number(totalAmount.toFixed(2)) } </div>
            </div>
        );
    };

    return (
        <>
            { orderBooks.length ? <FullCart /> : <EmptyCart /> }
        </>
    );
}