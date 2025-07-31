import styles from './Header.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Logo from './headerComponents/logo/Logo';
import Navbar from './headerComponents/navbar/Navbar';
import NavMobile from './headerComponents/navMobile/NavMobile';
import ScrollDownArrow from '../homePageComponents/scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';
import ShoppingCartButton from './headerComponents/shoppingCartButton/ShoppingCartButton';
import FilterMobile from './headerComponents/filterMobile/FilterMobile';

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
        </>                            
                          
    );
};

Header.propTypes = {
    productsQuantityInCart: PropTypes.number,
    pathname: PropTypes.string
}

export default Header;