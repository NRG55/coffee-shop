import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                { path: 'shop', element: <Shop />},
                { path: 'about', element: <About />},
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;
