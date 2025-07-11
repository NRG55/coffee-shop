import styles from './Card.module.css';
import getImage from "../../utils/getImage";

const Card = ( {product} ) => {
    const imageUrl = getImage(product.id);
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="product"/>
            </div>
            <div>
                <p>{product.name}</p>
                <p>€{product.price}</p>
            </div>
        </article>
    );
};

export default Card;