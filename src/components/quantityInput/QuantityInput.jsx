import styles from './QuantityInput.module.css';
import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react"; 

const QuantityInput = ({ productQuantity, setProductQuantity}) => { 
    const handleChange = (event) => {
        const inputValue = event.target.value;

        if (inputValue === "") {
            return setProductQuantity("");
        }

        setProductQuantity(inputValue);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Backspace" || event.key === "Delete") {
            return
        };

        if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
        };
    };   

    return (
        <article className={styles.container}>
            <button
                type="button"
                className={styles.button}               
                onClick={() => productQuantity >= 1 && setProductQuantity(productQuantity - 1)}
            >
                <Minus size={16} />
            </button>
            <input
                type="number"
                value={productQuantity}                             
                className={styles.numberInput}
                onFocus={(event) => event.currentTarget.select()}
                onBlur={(event) => !event.target.value && setProductQuantity(1)}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
            <button
                type="button"
                className={styles.button}           
                onClick={() => setProductQuantity(Number(productQuantity )+ 1)}
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