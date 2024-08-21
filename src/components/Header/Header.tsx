import { useContext, useState } from "react";

import Logo from "../Logo/Logo";
import UserPanel from "../UserPanel/UserPanel";
import { UserContext, userContextType } from "../../context/UserContex";
import MenuIcon from "../MenuIcon/MenuIcon";
import AdaptiveMenuBar from "../AdaptiveMenuBar/AdaptiveMenuBar";

import "./Header.css";

export default function Header() {
    const {isLogged} = useContext(UserContext) as userContextType;
    const [menuStatus, setMenuStatus] = useState("");

    const setMenuStatusHandle = (event: React.FormEvent<HTMLDivElement>) => {
        setMenuStatus((prevStat) => {
            return prevStat === "active" ? "" : "active";
        });
    };

    return (
        <header>
            <Logo />
            { isLogged ? <MenuIcon menuStatus = {menuStatus} setMenuStatus = {setMenuStatusHandle} /> : <></> }
            { isLogged ? <AdaptiveMenuBar setMenuStatus = {setMenuStatusHandle}><UserPanel /></AdaptiveMenuBar> : <></> }
        </header>
    );
};