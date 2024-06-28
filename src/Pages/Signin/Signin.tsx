import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext, userContextType} from "../../context/UserContex";

import nonAvatar from "../../assets/images/avatar.png"
import "./Signin.css";

export default function Signin() {
    const user = useContext(UserContext) as userContextType;
    
    //керування доступністу кнопки Signin в заложності від кількості символів логіна
    const [buttonStatus, setButtonStatus] = useState(true);
    useEffect(() => {
        if (user.userName.length >= 4 && user.userName.length < 16) {
            setButtonStatus(false);
        } else setButtonStatus(true);
    }, [user.userName]);

    function setUser(e: React.ChangeEvent<HTMLInputElement>) {
        user.setUserName(e.currentTarget.value);
    }

    function sendUserName() {
        user.setLogged(true);
    }

    return (
        <div className="signin-wrapper">
            <img className="signin-avatar" src={nonAvatar} alt="avatar don't load" />
            <label htmlFor="userName">Username</label>
            <input 
                className="userName" 
                id="userName" 
                type="text" 
                onChange = {setUser} value={user.userName} 
                placeholder="Type Username"
            />
            <Link to="/books">
                <button 
                    className="signin-button" 
                    type="submit" 
                    onClick = {sendUserName}
                    disabled = {buttonStatus}
                >
                    Sign-In
                </button>
            </Link>
        </div>
    );
}