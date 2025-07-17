import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/images/logo/logo.png';
import Navbar from "../navbar/Navbar";
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';
import ShoppingCartButton from '../shoppingCartButton/ShoppingCartButton';

const Header = ({ productsQuantityInCart }) => {
    const [isHeaderTransparent, setHeaderTransparent] = useState(true);

    const { pathname } = useLocation();
  
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
                                ${pathname === "/" ? styles.whiteTextAndIcon : styles.blackTextAndIcon}
                                ${!isHeaderTransparent &&
                                pathname === "/" ? styles.blackBackground : ""}
                                ${!isHeaderTransparent &&
                                pathname !== "/" ? styles.whiteBackground : ""}                            
                                `}
                >               
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <Navbar />
                    <ShoppingCartButton productsQuantityInCart={productsQuantityInCart} />                   
                </div>                
            </header>
            {isHeaderTransparent &&
             useLocation().pathname === "/" ? <ScrollDownArrow /> : null}
        </>                            
                          
    );
};

export default Header;