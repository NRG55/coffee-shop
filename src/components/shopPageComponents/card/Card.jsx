import styles from './Card.module.css';
import PropTypes from 'prop-types';
import getImage from "../../../utils/getImage";
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const imageUrl = getImage(product.id);

    return (
        <article className={styles.card}>
            <Link to={`/product/${product.brand.replace(/\s+/g, '-').toLowerCase()}/${product.id}`}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl} alt="product"/>
                </div>
                <div>
                    <p>{product.name}</p>
                    <p>€{product.price}</p>
                </div>
            </Link>
        </article>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired
}

export default Card;