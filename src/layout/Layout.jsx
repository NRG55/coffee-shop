import PropTypes from "prop-types";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const Layout = ({ productsQuantityInCart }) => {
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

Layout.propTypes = {
    productsQuantityInCart: PropTypes.number
}

export default Layout;