import styles from './ShoppingCartButton.module.css';
import { ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

const ShoppingCartButton = ({ productsQuantityInCart }) => {
    return (
        <button className={styles.button}>
            <ShoppingCart 
                color={`${useLocation().pathname === "/" ? "white": "black"}`}
                strokeWidth="1.5"
            />
            <span
                className={styles.counter}               
            >
            <small>{productsQuantityInCart}</small>
            </span>
        </button>
    );
};

export default ShoppingCartButton;