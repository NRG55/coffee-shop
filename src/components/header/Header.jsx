import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import Logo from '../logo/Logo';
import Navbar from "../navbar/Navbar";
import NavMobile from '../navMobile/NavMobile';
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';
import ShoppingCartButton from '../shoppingCartButton/ShoppingCartButton';

const Header = ({ productsQuantityInCart }) => {
    const [isHeaderTransparent, setHeaderTransparent] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
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
                    <Logo />
                    <Navbar />
                    <div className={styles.shoppingCartAndMobileNavWrapper}>
                        <ShoppingCartButton productsQuantityInCart={productsQuantityInCart} /> 
                        <NavMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>                  
                </div>                
            </header>
            {isHeaderTransparent &&
             useLocation().pathname === "/" ? <ScrollDownArrow /> : null}
        </>                            
                          
    );
};

export default Header;