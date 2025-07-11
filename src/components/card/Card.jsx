import getImage from "../../utils/getImage";

const Card = ( {product} ) => {
    const imageUrl = getImage(product.id);
    return (
        <div>
            <img src={imageUrl} alt="product"/>
            <div>
                <p>{product.name}</p>
                <p>€{product.price}</p>
            </div>
        </div>
    );
};

export default Card;