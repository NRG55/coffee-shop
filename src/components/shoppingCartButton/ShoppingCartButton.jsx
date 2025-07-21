import styles from './ShoppingCartButton.module.css';
import { ShoppingCart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const ShoppingCartButton = ({ productsQuantityInCart }) => {
    return (
        <Link to="/shopping-cart">
            <button className={styles.button}>
                <ShoppingCart 
                    color={`${useLocation().pathname === "/" ? "white": "black"}`}
                    strokeWidth="1.5"
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