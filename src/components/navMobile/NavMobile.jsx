import styles from './NavMobile.module.css';
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'lucide-react';

const NavMobile = () => {  
    

    return (
        <>
            <button className={styles.menuButton}>
                <Menu 
                    color={`${useLocation().pathname === "/" ? "white": "black"}`}
                    strokeWidth="1.2"
                    size={40}
                />
            </button>
            <nav className={styles.nav} >
                <ul className={`${useLocation().pathname === "/" ? styles.blackBackground : styles.whiteBackground}`}>
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
        </>
    );
};

export default NavMobile;