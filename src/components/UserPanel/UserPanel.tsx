import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Context, contextType} from "../../context/Contex";
import { OrderContext, contextType as orderContextType } from '../../context/OrderContext';

import cartImg from "../../assets/images/cart.svg";
import avatarImg from "../../assets/images/avatar.png";
import "./UserPanel.css";

export default function UserPanel() {
    const user = useContext(Context) as contextType;
    const order = useContext(OrderContext) as orderContextType;

    const logOut = () => {
        user.setLogged(false);
        user.setUserName("");
        order.setBooks([]);
    };

    const [cartStatus, setCartStatus] = useState("cart");
    const [bookCount, setBookCount] = useState(0);

    useEffect(() => {
        if (order.orderBooks.length) {
            setCartStatus("cart cart__full");
            const totalBookCount = order.orderBooks.reduce((sum, book) => sum + book.count, 0);
            setBookCount(totalBookCount);
        }
        else setCartStatus("cart");
    }, [order.orderBooks]);
    
    return (
        <div className="user-panel">
            <Link to="/cart" className={ cartStatus }>
                <img src={cartImg} alt="cart"/>
                <div className="cart__full--number">{ bookCount }</div>
            </Link>
            <Link className="signin" to="/signin">
                <button onClick = {logOut}>
                    {user.isLogged ? "Sign-out" : "Sing-In"}
                </button>
            </Link>
            <img className="avatar" src={avatarImg} alt="avatar"/> 
            <span>{user.isLogged ? user.userName : "Username"}</span>
        </div>
    );
}