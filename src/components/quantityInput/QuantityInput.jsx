import styles from './QuantityInput.module.css';
import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react"; 

const QuantityInput = ({ productQuantity, setProductQuantity}) => { 
console.log(productQuantity)
    return (
        <article className={styles.container}>
            <button
                type="button"
                className={styles.button}               
                onClick={() => productQuantity >= 2 && setProductQuantity(productQuantity - 1)}
            >
                <Minus size={16} />
            </button>
            <input
                type="number"
                value={productQuantity}                             
                className={styles.numberInput}
                readOnly
            />
            <button
                type="button"
                className={styles.button}           
                onClick={() => setProductQuantity(productQuantity + 1)}
            >
                <Plus size={16} />
            </button>
        </article>
    );
};

QuantityInput.propTypes = {
    productQuantity: PropTypes.number.isRequired,
    setProductQuantity: PropTypes.func.isRequired,
}; 

export default QuantityInput; 