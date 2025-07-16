import styles from './ProductPage.module.css';
import { useState } from 'react';
import QuantityInput from '../../components/quantityInput/QuantityInput';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../utils/filter';
import getImage from "../../utils/getImage";


const ProductPage = () => {
    const [productQuantity, setProductQuantity] = useState(1); 
    
    const { productId } = useParams();
    const product = getProductById(productId);
    const imageUrl = getImage(product.id);    

    return (
        <section className={styles.section}> 
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={imageUrl} alt="product"/>
                </div> 
                <div className={styles.productContainer}>
                    <div className={styles.productInfoWrapper}>
                        <h2>{product.name.toUpperCase()}</h2>
                        <p className={styles.weight}>weigth: {product.weight}gr.</p>
                        <p className={styles.price}>€{product.price}</p>
                        <p className={styles.description}>{product.description}</p>
                    </div>           
                    <div className={styles.addToCartContainer}>      
                        <QuantityInput
                            productQuantity={productQuantity}
                            setProductQuantity={setProductQuantity} 
                        />
                        <button className={styles.button}>Add to Cart</button>
                    </div>
                </div> 
            </div>      
        </section>
    );
};

export default ProductPage;