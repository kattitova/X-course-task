import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderContext, contextType } from "../../context/OrderContext";
import "./CartItem.css";
import { FaRegTrashAlt } from 'react-icons/fa';

import { bookType } from "../../types/BookTypes";

type propsType = {
    book: bookType,
    count: number,
}

export default function CartItem({ book, count } : propsType) {
    const order = useContext(OrderContext) as contextType;
    const deleteItemHandle = (id: number) => {
        // delete book from cart
        order.setBooks(prevState => {
            const arr = prevState.filter(item => item.bookID !== id);
            return arr;
        });
    }

    return (
        <div className="cart__item">
            <img className="cart__item--image" src={ book.image } alt={ book.title } />
            <p><Link to={`/books/${book.id}`}>{ book.title }</Link></p>
            <p>{ book.price }</p>
            <p>{ count }</p>
            <p>{ count * book.price }</p>
            <button className="cart__item--deleteButton" onClick = {() => deleteItemHandle(book.id) } ><FaRegTrashAlt/></button>
        </div>
    );
}