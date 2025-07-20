import styles from './ShoppingCart.module.css';
import CartList from '../../components/cartList/CartList';

const ShoppingCart = ({ 
    cartProducts,
    setCartProducts,   
    removeCartProduct
}) => {

    return (
        <section>
            <CartList cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </section>
    );   
};

export default ShoppingCart;