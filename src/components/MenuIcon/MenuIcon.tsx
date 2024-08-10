import "./MenuIcon.css";

type propsType = {
    menuStatus: string,
    setMenuStatus: React.MouseEventHandler<HTMLDivElement>,
}

export default function MenuIcon( {menuStatus, setMenuStatus} : propsType ) {
    return (
        <div className={`menu-icon ${menuStatus}`} onClick={setMenuStatus}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};