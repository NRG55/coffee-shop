import styles from './CartItem.module.css';
import { Link } from 'react-router-dom';
import getImage from '../../utils/getImage';
import QuantityInput from '../quantityInput/QuantityInput';

const CartItem = ({ product }) => {
    const productImage = getImage(2);

    return (
        <div className={styles.cartItem}>
            <Link>
                <div className={styles.imageWrapper}>
                    <img src={productImage}/>
                </div>
            </Link>
            <div className={styles.rightContainer}>
                <Link>
                    <p className={styles.productName}>Sidamo</p>                   
                </Link>
                <button>Delete</button>
                <div>
                 <p className={styles.productPrice}>price: €7.99</p>
                <QuantityInput />
                </div>
                <p className={styles.subtotal}>€24</p>
            </div>            
        </div>
    );
};

export default CartItem;