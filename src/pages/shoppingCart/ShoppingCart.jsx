import styles from './ShoppingCart.module.css';
import CartList from '../../components/shoppingCartPageComponents/cartList/CartList';
import { getProductById } from '../../utils/filter';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ShoppingCart = ({ cartProducts, addProductToCart, removeProductFromCart }) => {
    const isEmpty = Object.keys(cartProducts).length === 0;

    const getCartTotal = () => {
        let total = 0;

        for (const productId in cartProducts) {
            const productObject = getProductById(productId);
            const subtotal = cartProducts[productId] * productObject.price;
            
            total += subtotal;
        };

        return total.toFixed(2);
    };

    if (isEmpty) {
        return (           
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Your shopping cart is currently empty.</h1>
                    <Link to="/shop/all">
                        <button className={styles.continueShoppingButton}>Continue shopping</button>
                    </Link>
                </div>
            </section>          
        )
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.heading}>YOUR CART</h1>
                <CartList 
                    cartProducts={cartProducts} 
                    addProductToCart={addProductToCart} 
                    removeProductFromCart={removeProductFromCart}
                />
                <div className={styles.subtotal}>
                    <p className={styles.subtotalText}>Subtotal:</p>
                    <p className={styles.subtotalPrice}>€{getCartTotal()}</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <Link to="/shop/all">
                        <button className={styles.backToShopButton}>Back to Shop</button>
                    </Link>
                    <button 
                        className={styles.checkoutButton} 
                        onClick={() => toast("Thank you for your order.\n We hope you love it!")}                        
                    >
                        Check out
                    </button>
                </div>
            </div>          
        </section>
    );   
};

export default ShoppingCart;