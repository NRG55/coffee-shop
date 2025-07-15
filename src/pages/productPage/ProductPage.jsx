import styles from './ProductPage.module.css';
import { useState } from 'react';
import QuantityInput from '../../components/quantityInput/QuantityInput';

const ProductPage = () => {
    const [productQuantity, setProductQuantity] = useState(1);    

    return (
        <section className={styles.container}>          
            <QuantityInput
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity} 
            />
        </section>
    );
};

export default ProductPage;