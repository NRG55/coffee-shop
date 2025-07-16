import styles from './ShoppingCartButton.module.css';
import { ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

const ShoppingCartButton = () => {
    return (
        <button className={styles.button}>
            <ShoppingCart 
                color={`${useLocation().pathname === "/" ? "white": "black"}`}
                strokeWidth="1.5"
            />
            <span
                className={styles.counter}               
            >
            <small>5</small>
            </span>
        </button>
    );
};

export default ShoppingCartButton;