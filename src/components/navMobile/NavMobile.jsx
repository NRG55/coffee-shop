import styles from './NavMobile.module.css';
import { Link, useLocation } from "react-router-dom";
import { Squash as Menu } from 'hamburger-react';
import { useClickAway } from 'react-use';
import { useState, useRef } from 'react';

const NavMobile = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false));

    return (
        <div ref={ref} className={styles.navMobileContainer}>
            <button className={styles.menuButton}>
                <Menu 
                    color={`${location.pathname === "/" ? "white": "black"}`}                   
                    size={24}
                    duration={0.1}
                    toggled={isOpen} 
                    toggle={setIsOpen}                                  
                />
            </button>
            {isOpen &&
            <nav className={styles.nav} >
                <ul className={`${location.pathname === "/" ? styles.blackBackground : styles.whiteBackground}`}>
                    <li>
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen((prev) => !prev)}
                            onBlur={() => setIsOpen(false)}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/shop/all"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
            }
        </div>
    );
};

export default NavMobile;