import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/images/logo/logo.png';
import Navbar from "../navbar/Navbar";
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';
import ShoppingCartButton from '../shoppingCartButton/ShoppingCartButton';

const Header = () => {
    const [isHeaderTransparent, setHeaderTransparent] = useState(true);

    const setHeaderNonTransparent = () => {
        if (window.scrollY >= 1) {
            return setHeaderTransparent(false);
        };

        setHeaderTransparent(true);
    };

    window.addEventListener("scroll", setHeaderNonTransparent);
 
    return (
        <>
            <header className={styles.header }>
                <div className={`${styles.container} 
                                ${useLocation().pathname === "/" ? styles.whiteTextAndIcon : styles.blackTextAndIcon}
                                ${!isHeaderTransparent &&
                                useLocation().pathname === "/" ? styles.blackBackground : ""}
                                ${!isHeaderTransparent &&
                                useLocation().pathname !== "/" ? styles.whiteBackground : ""}                            
                                `}
                >               
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <Navbar />
                    <ShoppingCartButton />                   
                </div>                
            </header>
            {isHeaderTransparent &&
             useLocation().pathname === "/" ? <ScrollDownArrow /> : null}
        </>                            
                          
    );
};

export default Header;