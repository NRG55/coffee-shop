import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/images/logo/logo.png';
import Navbar from "../navbar/Navbar";
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import { useState } from 'react';

const Header = () => {
    const [isHeaderBackground, setHeaderBackground] = useState(false);

    const changeHeaderBackground = () => {
        if (window.scrollY >= 1) {
            return setHeaderBackground(true);
        };

        setHeaderBackground(false);
    };

    window.addEventListener("scroll", changeHeaderBackground);

    return (
        <>
            <header className={`${styles.header } 
                                ${useLocation().pathname === "/" ? styles.black : styles.white}
                                ${isHeaderBackground &&
                                useLocation().pathname === "/" ? styles.shadow : ""}                            
                            `}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo"/>
                    </Link>
                </div>
                <Navbar />
                <div>Cart</div>
            </header>
            {!isHeaderBackground &&
             useLocation().pathname === "/" ? <ScrollDownArrow /> : null}
        </>                            
                          
    );
};

export default Header;