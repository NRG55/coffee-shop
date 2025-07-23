import styles from './Navbar.module.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();
    const location = pathname.split("/");

    return (
        <nav className={styles.navbar} >
            <ul>
                <li className={location[1] === "" ? styles.active : ""}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={location[1] === "shop" ? styles.active : ""}>
                    <Link to="/shop/all">SHOP</Link>
                </li>
                <li className={location[1] === "about" ? styles.active : ""}>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;