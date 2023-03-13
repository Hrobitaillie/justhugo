export const ImageWebP = ({ src, fallback, classnames, type = 'image/webp', ...delegated }) => {
    return (
        <picture className={classnames}>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} />
        </picture>
    );
    };

    /* Exemple of use

    <ImgWithFallback
        src="/images/cereal.webp"
        fallback="/images/cereal.png"
        alt="A photo showing the expiration date on a box of Lucky Charms"
    />

    */

    export default ImageWebP