import styles from './CartItem.module.css';
import { Link } from 'react-router-dom';
import getImage from '../../utils/getImage';
import QuantityInput from '../quantityInput/QuantityInput';
import { getProductById } from '../../utils/filter';

const CartItem = ({ id, cartProducts, setCartProducts, productsQuantities, setProductsQuantities }) => {
    const isShoppingCart = true; 
    const productImage = getImage(id);
    const productObject = getProductById(id);   

    const setProductQuantity = (newQuantity) => {
        setProductsQuantities((previousProductsQuantities) => ({
          ...previousProductsQuantities,
                            [id]: newQuantity,
        }));
      };

    return (
        <article className={styles.cartItem}>
            <Link>
                <div className={styles.imageWrapper}>
                    <img src={productImage}/>
                </div>
            </Link>
            <div className={styles.rightContainer}>
                <Link>
                    <p className={styles.productName}>{productObject.name}</p>                   
                </Link>
                <button>Delete</button>
                <div>
                <p className={styles.productPrice}>price: €{productObject.price}</p>
                <QuantityInput                        
                        productQuantity={productsQuantities[id]}
                        setProductQuantity={setProductQuantity} 
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}                        
                        isShoppingCart={isShoppingCart}
                />
                </div>
                <p className={styles.subtotal}>€{productObject.price}</p>
            </div>            
        </article>
    );
};

export default CartItem;