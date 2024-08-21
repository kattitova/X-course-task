import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext, booksContextType } from "../../context/BooksContext";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";
import EmptyCartImg from "../../assets/images/empty-cart.png";

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
            <div className="cart__wrapper empty">
                <h3>Your cart is empty</h3>
                <img className="empty-cart-img" src={EmptyCartImg} alt="empty cart" />
                <p>Looks like you have no items in your shopping cart.</p>
                <p>Click <Link className="back-to-shopping" to="/books">here</Link> to continue your shopping.</p>
            </div>
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