import styles from './ProductPage.module.css';
import { useState } from 'react';
import QuantityInput from '../../components/quantityInput/QuantityInput';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../utils/filter';
import getImage from "../../utils/getImage";
import PropTypes from 'prop-types';


const ProductPage = ({ addProductToCart }) => {
    const [productQuantity, setProductQuantity] = useState(1); 
    
    const { productId } = useParams();
    const product = getProductById(productId);
    const imageUrl = getImage(product.id);
    
    const handleClick = () => {
        addProductToCart(productId, productQuantity);    
    };

    return (
        <section className={styles.section}> 
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={imageUrl} alt="product"/>
                </div> 
                <div className={styles.productContainer}>
                    <div className={styles.productInfoWrapper}>
                        <h2>{product.name.toUpperCase()}</h2>
                        <p className={styles.weight}>weigth: {product.weight}gr.</p>
                        <p className={styles.price}>€{product.price}</p>
                        <p className={styles.description}>{product.description}</p>
                        <p className={styles.type}>coffee type: <span>{product.type}</span></p>
                    </div>           
                    <div className={styles.addToCartContainer}>      
                        <QuantityInput
                            productId={productId}
                            productQuantity={productQuantity}
                            setProductQuantity={setProductQuantity} 
                        />
                        <button 
                            type='button'
                            className={styles.button}
                            onClick={handleClick}
                        >
                            Add to Cart
                        </button>                       
                    </div>
                    <Link to="/shop/all">
                        <button className={styles.continueShoppingButton}>Continue shopping</button>
                    </Link>
                </div> 
            </div>      
        </section>
    );
};

ProductPage.propTypes = {
    addProductToCart: PropTypes.func
}

export default ProductPage;