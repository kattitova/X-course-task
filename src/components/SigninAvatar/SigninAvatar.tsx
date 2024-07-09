import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { UserContext, userContextType, avatarsList } from "../../context/UserContex";

import "./SigninAvatar.css";
import { FaArrowAltCircleLeft as Arrow } from "react-icons/fa";

export default function SigninAvatar() {
    const imageRef = useRef() as MutableRefObject<HTMLImageElement>;
    const {avatarID, setAvatarID} = useContext(UserContext) as userContextType;
    const [left, setLeft] = useState(0);

    const list = avatarsList.map((image) => {
        return (
            <img 
                ref={imageRef} 
                style = {{left: `${left}px`}} 
                className="signin__avatar--image" 
                key={image.id} 
                src={process.env.PUBLIC_URL + "/assets/images/avatars/" + image.src} 
                alt={image.alt} 
            />
        );
    });

    const rightCarouselButtonHandle = () => {
        setAvatarID((prevState) => prevState + 1 >= avatarsList.length - 1 ? avatarsList.length - 1 : prevState + 1);
    }

    const leftCarouselButtonHandle = () => {
        setAvatarID((prevState) => prevState - 1 < 0 ? 0 : prevState - 1);
    }

    useEffect (() => {
        const imageWidth = imageRef.current.offsetWidth;
        const left = avatarID === 0 ? 0 : -avatarID * (imageWidth + 10);
        setLeft(left);
    }, [avatarID]);

    return (
        <div className="signin__avatar signin__avatar--wrapper">
            <button 
                className="signin__avatar--arrow left" 
                onClick={leftCarouselButtonHandle}
                disabled = {avatarID === 0 ? true : false}
            >
                <Arrow />
            </button>
            <div className="signin__avatar--imageList">
                {list}
            </div>
            <button 
                className="signin__avatar--arrow right" 
                onClick={rightCarouselButtonHandle}
                disabled = {avatarID === avatarsList.length - 1 ? true : false}
            >
                <Arrow />
            </button>
        </div>
    );
}