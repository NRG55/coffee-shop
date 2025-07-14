import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import PopularProducts from "../components/popularProducts/PopularProducts";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <PopularProducts />
            <footer style={{height: '5rem'}}>footer</footer>
        </>
    );
};

export default Root;