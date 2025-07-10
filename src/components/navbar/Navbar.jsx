import styles from './Navbar.module.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar} >
            <ul className={useLocation().pathname !== "/" ? styles.black : styles.white}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;