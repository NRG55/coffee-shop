import styles from './CartItem.module.css';
import { Link } from 'react-router-dom';
import getImage from '../../utils/getImage';
import QuantityInput from '../quantityInput/QuantityInput';
import { getProductById } from '../../utils/filter';

const CartItem = ({ productId, productsQuantities, setProductsQuantities, addProductToCart, removeProductFromCart }) => {
    const isShoppingCart = true; 
    const productImage = getImage(productId);
    const productObject = getProductById(productId);   

    const setProductQuantity = (newQuantity) => {
        setProductsQuantities((previousProductsQuantities) => ({
          ...previousProductsQuantities,
                            [productId]: newQuantity,
        }));

        addProductToCart(productId, newQuantity, isShoppingCart)
    };   

    return (
        <article className={styles.cartItem}>
            <Link to={`/product/${productObject.brand}/${productId}`}>
                <div className={styles.imageWrapper}>
                    <img src={productImage}/>
                </div>
            </Link>
            <div className={styles.rightContainer}>
                <Link to={`/product/${productObject.brand}/${productId}`}>
                    <p className={styles.productName}>{productObject.name}</p>                   
                </Link>
                <button onClick={() => removeProductFromCart(productId)}>Delete</button>
                <div>
                <p className={styles.productPrice}>price: €{productObject.price}</p>
                <QuantityInput                        
                        productQuantity={productsQuantities[productId]}
                        setProductQuantity={setProductQuantity}                                            
                />
                </div>
                <p className={styles.subtotal}>€{Math.round(productObject.price * productsQuantities[productId] * 100) / 100}</p>
            </div>            
        </article>
    );
};

export default CartItem;