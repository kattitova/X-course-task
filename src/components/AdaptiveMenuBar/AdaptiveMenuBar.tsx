import "./AdaptiveMenuBar.css";

type propsType = {
    children: JSX.Element,
    setMenuStatus: React.MouseEventHandler<HTMLDivElement>,
};

export default function AdaptiveMenuBar({children , setMenuStatus} : propsType) {
    const overlayHandle = (event: React.FormEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div className="adaptive-menu" onClick = {setMenuStatus}>
            {children}
            <div className="menu-overlay" onClick = {overlayHandle}></div>
        </div>
    );
};