import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";

type BookPropsType = {
    price: number,
}

export default function BookCountBlock({price} : BookPropsType) {
    const [count, setCount] = useState("1");
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        setTotalPrice((prevState) => Number(count) * price);
    }, [count]);

    const countChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCount(e.currentTarget.value);
    }

    const decrement = () => {
        setCount((prevState) => {
            const newCount = Number(prevState) - 1;
            return newCount < 1 ? "1" : String(newCount);
        });
    }

    const increment = () => {
        setCount((prevState) => String(Number(prevState) + 1));
    }

    return (
        <>
            <div>Book price ${price}</div>
            <div>Count
                <button className="decrement-button" onClick={decrement}>-</button>
                <input 
                    className="count-input"
                    value={count}
                    onChange={countChangeHandle}
                />
                <button className="increment-button" onClick={increment}>+</button>
            </div>
            <div>Total Price ${totalPrice}</div>
            <AddToCart />
        </>
    );
}