import imgNotFound from "../../assets/images/imageNotFound.png";

type propsType = {
    imgClass?: string,
    src: string, 
    title: string,
};

export default function BookImage({imgClass, src, title}:propsType) {
    const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = imgNotFound;
    }

    return (
        <img className={imgClass} src={src || imgNotFound} alt={title} onError={onImgError} />
    );
}