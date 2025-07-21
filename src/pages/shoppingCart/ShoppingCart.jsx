import styles from './ShoppingCart.module.css';
import CartList from '../../components/cartList/CartList';

const ShoppingCart = ({ 
    cartProducts,   
    addProductToCart,   
    removeProductFromCart
}) => {

    return (
        <section>
            <CartList 
                cartProducts={cartProducts} 
                addProductToCart={addProductToCart} 
                removeProductFromCart={removeProductFromCart}
            />
        </section>
    );   
};

export default ShoppingCart;