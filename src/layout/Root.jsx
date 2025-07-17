import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const Root = ({ productsQuantityInCart }) => {
    return (
        <>        
            <Header productsQuantityInCart={productsQuantityInCart} />
            <main>
                <Outlet />
            </main>           
            <Footer />
            <ScrollToTop/>
        </>
    );
};

export default Root;