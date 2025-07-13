import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer style={{height: '5rem'}}>footer</footer>
        </>
    );
};

export default Root;