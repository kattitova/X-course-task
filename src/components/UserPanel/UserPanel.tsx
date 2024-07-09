import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, userContextType} from "../../context/UserContex";
import { BooksContext, arrayBooksType, booksContextType } from '../../context/BooksContext';

import {ReactComponent as CartImg} from "../../assets/images/cart.svg";
import "./UserPanel.css";

export default function UserPanel() {
    const user = useContext(UserContext) as userContextType;
    const {orderBooks} = useContext(BooksContext) as booksContextType;

    //const {setLogOut} = useLocalStorage("bookStoreUser", {userName: user.userName, isLogged: user.isLogged, orderBooks: orderBooks});

    const logOut = () => {
        user.setLogged(false);
    };

    const [cartStatus, setCartStatus] = useState("cart");
    const [bookCount, setBookCount] = useState(0);

    useEffect(() => {
        if (orderBooks.length) {
            setCartStatus("cart cart__full");
            const totalBookCount = (orderBooks as Array<arrayBooksType>).reduce((sum: number, book: arrayBooksType) => sum + book.count, 0);
            setBookCount(totalBookCount);
        }
        else setCartStatus("cart");
    }, [orderBooks]);
    
    return (
        <div className="user-panel">
            <Link to="/cart" className={ cartStatus }>
                <CartImg className='cart-img' />
                <div className="cart__full--number">{ bookCount }</div>
            </Link>
            <Link className="signin" to="/signin">
                <button onClick = {logOut}>
                    {user.isLogged ? "Sign-out" : "Sing-In"}
                </button>
            </Link>
            <div className='user-info'>
                <img className="avatar" src={process.env.PUBLIC_URL + "/assets/images/avatars/avatar-" + user.avatarID + ".png"} alt="avatar"/> 
                <span>{user.isLogged ? user.userName : "Username"}</span>
            </div>
        </div>
    );
}