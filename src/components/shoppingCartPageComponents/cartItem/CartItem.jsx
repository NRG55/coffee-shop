import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import QuantityInput from '../../quantityInput/QuantityInput';

const CartItem = ({ 
        product,
        imageUrl, 
        productsQuantities, 
        setProductsQuantities, 
        addProductToCart, 
        removeProductFromCart 
    }) => {
    const setProductQuantity = (newQuantity) => {
        setProductsQuantities((previousProductsQuantities) => ({
          ...previousProductsQuantities,
                            [product.id]: newQuantity,
        }));

        addProductToCart(product.id, newQuantity)
    };   

    return (
        <article className={styles.cartItem}>
            <Link to={`/product/${product.brand}/${product.id}`}>
                <div className={styles.imageWrapper}>
                    <img src={imageUrl}/>
                </div>
            </Link>
            <div className={styles.rightContainer}>
                <Link to={`/product/${product.brand}/${product.id}`}>
                    <p className={styles.productName}>{product.name}</p>                   
                </Link>
                <button onClick={() => removeProductFromCart(product.id)}>Delete</button>
                <div>
                <p className={styles.productPrice}>price: €{product.price}</p>
                <QuantityInput 
                        productId={product.id}                       
                        productQuantity={productsQuantities[product.id]}
                        setProductQuantity={setProductQuantity}                                            
                />
                </div>
                <p className={styles.subtotal}>€{Math.round(product.price * productsQuantities[product.id] * 100) / 100}</p>
            </div>            
        </article>
    );
};

CartItem.propTypes = {    
    productsQuantities: PropTypes.object.isRequired,
    setProductsQuantities: PropTypes.func.isRequired,
    setProductQuantity: PropTypes.func.isRequired,
    productQuantity: PropTypes.number.isRequired,    
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default CartItem;