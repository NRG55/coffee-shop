import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '/src/images/logo/logo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
            </div>
            <Navbar />
            <div>Cart</div>
        </header>
    );
};

export default Header;