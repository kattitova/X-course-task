import Logo from "./Logo/Logo";
import UserPanel from "./UserPanel/UserPanel";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <Logo />
            <UserPanel />
        </header>
    );
};