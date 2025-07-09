import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Root;