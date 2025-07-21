import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/About";
import CardsSection from "./components/cardsSection/CardsSection";
import ProductPage from "./pages/productPage/ProductPage";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";

const Router = ({ productsQuantityInCart, addProductToCart, cartProducts, setCartProducts }) => {   
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Root productsQuantityInCart={productsQuantityInCart} />,
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
                                    /> 
                        }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;
