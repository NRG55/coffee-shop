import styles from './CartList.module.css';
import CartItem from '../cartItem/CartItem';
import { useState } from 'react';

const CartList = ({ cartProducts, setCartProducts, removeCartProduct }) => {
    const [productsQuantities, setProductsQuantities] = useState(cartProducts);

    return (
        <>
           {Object.entries(productsQuantities).map((cartProduct) => 
           // cartProduct[0] -> product id, cartProduct[1] -> product quantity 
                <CartItem 
                    key={"cartItem" + cartProduct[0]} 
                    id={cartProduct[0]} 
                    productsQuantities={productsQuantities}                    
                    setProductsQuantities={setProductsQuantities}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}                    
                />)}
        </>
    );
};

export default CartList;