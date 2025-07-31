import styles from './QuantityInput.module.css';
import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";  

const QuantityInput = ({
                    productId,                   
                    productQuantity, 
                    setProductQuantity                  
                    }) => { 
                
    const handleChange = (event) => {
        event.prevent.default();
        const inputValue = Number(event.target.value);      

        if (inputValue >= 1) {
            setProductQuantity(inputValue);
        };        
    };      

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
                id={`input-${productId}`}                
                type="number"
                value={productQuantity}                             
                className={styles.numberInput}               
                onChange={handleChange}
                min="1"
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