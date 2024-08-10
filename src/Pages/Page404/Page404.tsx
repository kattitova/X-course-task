import Image404Book from "../../assets/images/404-2.png";
import Image404Txt from "../../assets/images/404-1.png";

import "./Page404.css";

export default function Page404() {
    return (
        <div className="page404-wrapper">
            <img className="page404-img" src={Image404Book} alt="404 book not found" />
            <img className="page404-txt" src={Image404Txt} alt="404 text not found" />
        </div>
    );
}