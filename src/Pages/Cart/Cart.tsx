import { useContext } from "react";
import { OrderContext, contextType } from "../../context/OrderContext";
import CartItem from "../../components/CartItem/CartItem";

import {propsType} from "../../types/BookTypes";

export default function Cart({booksList} : propsType) {
    const order = useContext(OrderContext) as contextType;
    const { orderBooks } = order;

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

    const Cart = () => {
        return (
            <>
                { orderList }
                Total: ${totalAmount}
            </>
        );
    };

    return (
        <div>
            { orderBooks.length ? <Cart /> : <EmptyCart /> }
        </div>
    );
}