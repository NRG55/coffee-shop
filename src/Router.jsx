import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/About";
import CardsSection from "./components/cardsSection/CardsSection";
import ProductPage from "./pages/productPage/ProductPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Root />,
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
                            path: 'product/:brand/:id', 
                            element: <ProductPage /> 
                        }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;
