import cartImg from "../../../assets/images/cart.svg";
import avatarImg from "../../../assets/images/avatar.png";

export default function UserPanel() {
    return (
        <div className="user-panel">
            <a href="#cart" className="cart full"><img src={cartImg} alt="cart"/></a>
            <button type="reset">Sing-Out</button>
            <img src={avatarImg} alt="avatar"/> 
            <span>Username</span>
        </div>
    );
}