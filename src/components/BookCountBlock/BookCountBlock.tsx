import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";

type BookPropsType = {
    price: number,
    bookID: number,
}

export default function BookCountBlock({price, bookID} : BookPropsType) {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        setTotalPrice((prevState) => count * price);
    }, [count, price]);

    const countChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value);
        setCount(() => {
            if (Number.isNaN(inputValue)) return 1;
            else if (inputValue < 1) return 1;
            else if (inputValue > 42) return 42;
            else return inputValue;
        });
    }

    const decrement = () => {
        setCount((prevState) => {
            const newCount = prevState - 1;
            return newCount < 1 ? 1 : newCount;
        });
    }

    const increment = () => {
        setCount((prevState) => {
            const newCount = prevState + 1;
            return newCount > 42 ? 42 : newCount;
        });
    }

    return (
        <>
            <div className="single-book__price--price">Book price, $<span>{price}</span></div>
            <div className="single-book__price--count">
                Count
                <div className="single-book__price--buttons">
                    <button 
                        className="decrement-button" 
                        data-testid="decrement-button" 
                        onClick={decrement}
                        disabled={count <= 1 ? true : false}
                    >
                        -
                    </button>
                    <input 
                        className="count-input"
                        data-testid="count-input"
                        value={count}
                        onChange={countChangeHandle}
                    />
                    <button 
                        className="increment-button" 
                        data-testid="increment-button" 
                        onClick={increment}
                        disabled={count >= 42 ? true : false}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="single-book__price--total">
                Total Price, $
                <span data-testid="total-amount">
                    {totalPrice.toFixed(2)}
                </span>
            </div>
            <AddToCart bookID={bookID} count={count}/>
        </>
    );
}