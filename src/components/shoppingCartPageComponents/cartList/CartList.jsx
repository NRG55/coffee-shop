import PropTypes from 'prop-types';
import CartItem from '../cartItem/CartItem';
import { useState } from 'react';
import { getProductById } from '../../../utils/filter';
import getImage from '../../../utils/getImage';

const CartList = ({ cartProducts, addProductToCart, removeProductFromCart }) => {
    const [productsQuantities, setProductsQuantities] = useState(cartProducts);

    return (
        <>
           {Object.entries(cartProducts).map((cartProduct) => 
           // cartProduct[0] -> product id, cartProduct[1] -> product quantity 
                <CartItem 
                    key={"cartItem" + cartProduct[0]} 
                    product={getProductById(cartProduct[0])}
                    imageUrl={getImage(cartProduct[0])} 
                    productsQuantities={productsQuantities}                    
                    setProductsQuantities={setProductsQuantities}                   
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}                   
                />)}
        </>
    );
};

CartList.propTypes = {
    cartProducts: PropTypes.object.isRequired,   
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
    productsQuantities: PropTypes.object.isRequired
}

export default CartList;