import styles from './Home.module.css';
import backgroundImage from '/src/images/background/home-background.jpg';
import ScrollDownArrow from '../../components/homePageComponents/scrollDownArrow/ScrollDownArrow';
import PopularProducts from '../../components/homePageComponents/popularProducts/PopularProducts';
import ChooseUs from '../../components/homePageComponents/chooseUs/ChooseUs.';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => { 
    const [isScrollDownArrow, setScrollDownArray] = useState(true); 
    
    const handleScroll = () => {
        if (window.scrollY >= 1) {
            return setScrollDownArray(false);
        };

        setScrollDownArray(true);
    };

    window.addEventListener("scroll", handleScroll);
    
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.backgroundImageContainer}>
                    <img src={backgroundImage} alt="Hero"/>
                </div>
                <div className={styles.infoContainer}>
                    <h1>Find Your Flavor</h1>
                    <p>If you’re looking for a high-quality coffee, you can’t go wrong with our Coffee Shop. We have a wide selection of coffees to choose from.</p>
                    <Link to="./shop/all">
                        <button className={styles.button}>Shop Now</button>
                    </Link>               
                </div> 
                {isScrollDownArrow ? <ScrollDownArrow /> : null}               
            </section>
            <PopularProducts />
            <ChooseUs />
        </div>
    );
};

export default Home;