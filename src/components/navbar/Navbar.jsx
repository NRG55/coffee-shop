import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar} >
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/shop/all">SHOP</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;