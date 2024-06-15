import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Context, contextType} from "../../components/Contex";

import cartImg from "../../assets/images/cart.svg";
import avatarImg from "../../assets/images/avatar.png";
import "./UserPanel.css";

export default function UserPanel() {
    const user = useContext(Context) as contextType;
    const logOut = () => {
        user.setLogged(false);
        user.setUserName("");
    };
    
    return (
        <div className="user-panel">
            <a href="#cart" className="cart full"><img src={cartImg} alt="cart"/></a>
            <Link className="signin" to="/signin">
                <button onClick = {logOut}>
                    {user.isLogged ? "Sign-out" : "Sing-In"}
                </button>
            </Link>
            {/* <button type="reset">Sing-Out</button> */}
            <img className="avatar" src={avatarImg} alt="avatar"/> 
            <span>{user.isLogged ? user.userName : "Username"}</span>
        </div>
    );
}