import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import Logo from '../logo/Logo';
import Navbar from "../navbar/Navbar";
import NavMobile from '../navMobile/NavMobile';
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';
import ShoppingCartButton from '../shoppingCartButton/ShoppingCartButton';
import FilterMobile from '../filterMobile/FilterMobile';

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
                    <div className={styles.navMobileAndLogoWrapper}>      
                        <NavMobile />                              
                        <Logo />
                    </div>
                    <Navbar />                    
                    <div className={styles.searchMobileAndShoppingCartWrapper}>
                        <FilterMobile />
                        <ShoppingCartButton productsQuantityInCart={productsQuantityInCart} />                        
                    </div>                  
                </div>                
            </header>
            {isHeaderTransparent &&
             useLocation().pathname === "/" ? <ScrollDownArrow /> : null}
        </>                            
                          
    );
};

export default Header;