import { useContext } from "react";

import Logo from "../Logo/Logo";
import UserPanel from "../UserPanel/UserPanel";
import { UserContext, userContextType } from "../../context/UserContex";

import "./Header.css";

export default function Header() {
    const {isLogged} = useContext(UserContext) as userContextType;
    return (
        <header>
            <Logo />
            { isLogged ? <UserPanel /> : <></> }
        </header>
    );
};