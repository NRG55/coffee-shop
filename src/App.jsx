import Router from './Router';
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';

function App() {
    const [cartProducts, setCartProducts] = useState({}); // {productId1 : quantity, productId2: quantity, ...}

    const addProductToCart = (productId, quantity, isShoppingCart=false) => {
        if (cartProducts.hasOwnProperty(productId) && !isShoppingCart) {
            setCartProducts((previousCartProducts) => ({
                ...previousCartProducts,
                [productId]: previousCartProducts[productId] + quantity
            }));

            toast.success("Added to cart");
        } else {
            setCartProducts((previousCartProducts) => ({
                ...previousCartProducts,
                [productId]: quantity
            }));

            toast.success("Cart is updated");
        };        
    };

    const productsQuantityInCart = () => Object.values(cartProducts).reduce((a, b) => a + b, 0);

    return (
        <>
            <Router 
                addProductToCart={addProductToCart}
                productsQuantityInCart={productsQuantityInCart()}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}                           
            />
            <Toaster position="top-right" />
        </>
    );   
};

export default App;
