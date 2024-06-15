import { useState } from "react";
import { FaCheck } from 'react-icons/fa';

import "./AddToCart.css";

export default function AddToCart() {
    let [cartButton, setButtonStatus] = useState(false);
    const checkButton = () => {
        setButtonStatus(true);
    }

    return (
        <div className="button-cart" onClick={checkButton}>
            <div className="parent">
                <div className={`block ${cartButton}`}>
                    Add to cart { cartButton && <FaCheck /> }
                </div>
            </div>
        </div>
    );
}