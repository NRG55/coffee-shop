import styles from './ShoppingCartButton.module.css';
import { ShoppingCart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const ShoppingCartButton = ({ productsQuantityInCart }) => {
    return (
        <Link to="/shopping-cart" className={styles.shoppingCartButtonWrapper}>
            <button className={styles.button} aria-label="shopping cart">
                <ShoppingCart 
                    color={`${useLocation().pathname === "/" ? "white": "black"}`}
                    strokeWidth="1.8"
                    size={24}
                />
                 {productsQuantityInCart !== 0 ? 
                 <span className={styles.counter}>
                    <small>{productsQuantityInCart}</small>                   
                </span> :  null}                
            </button>
        </Link>
    );
};

export default ShoppingCartButton;