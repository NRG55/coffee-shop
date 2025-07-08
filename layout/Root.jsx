import Header from "../src/components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <section>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </section>
    );
};

export default Root;