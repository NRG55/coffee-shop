import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import CardsSection from "./components/shopPageComponents/cardsSection/CardsSection";
import ProductPage from "./pages/productPage/ProductPage";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";

const Router = ({ 
                productsQuantityInCart, 
                addProductToCart, 
                removeProductFromCart, 
                cartProducts, 
                setCartProducts               
               }) => {   
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Layout productsQuantityInCart={productsQuantityInCart} />,
            errorElement: <ErrorPage />,
            children: [
                        { 
                            index: true, 
                            element: <Home /> 
                        },
                        { 
                            path: 'shop', 
                            element: <Shop />, 
                            children: [
                                        { 
                                            path: ':brand',
                                            element: <CardsSection />
                                        }
                            ]
                        },
                        { 
                            path: 'about', 
                            element: <About />
                        },
                        { 
                            path: 'product/:brand/:productId', 
                            element: <ProductPage addProductToCart={addProductToCart} /> 
                        },
                        { 
                            path: 'shopping-cart', 
                            element: <ShoppingCart 
                                            cartProducts={cartProducts} 
                                            setCartProducts={setCartProducts} 
                                            addProductToCart={addProductToCart}
                                            removeProductFromCart={removeProductFromCart}
                                    /> 
                        }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

Router.propTypes = {
    productsQuantityInCart: PropTypes.number.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.object.isRequired,
    setCartProducts: PropTypes.func.isRequired
}

export default Router;
