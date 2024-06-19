import { useState, useContext } from "react";
import { FaCheck } from 'react-icons/fa';
import { OrderContext, contextType } from "../../context/OrderContext";

import "./AddToCart.css";

type propsType = {
    bookID: number,
    count: number,
}

export default function AddToCart({bookID, count}:propsType) {
    const order = useContext(OrderContext) as contextType;

    let [cartButton, setButtonStatus] = useState(false);

    const addToCartHandler = () => {
        setButtonStatus(true);

        order.setBooks(prevState => [...prevState, {bookID: bookID, count: count}]);
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
