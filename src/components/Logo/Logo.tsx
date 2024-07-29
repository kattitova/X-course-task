import "./Logo.css";
import {ReactComponent as LogoImg} from "../../assets/images/logo.svg";

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <LogoImg className="logo-image" />
            <h1 className="logo-text title">JS BAND STORE</h1>
            <span className="logo-text author">Kateryna Tytova</span>
        </div>
    );
};