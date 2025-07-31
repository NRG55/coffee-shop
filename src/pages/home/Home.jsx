import styles from './Home.module.css';
import backgroundImage from '/src/images/background/home-background.jpg';
import PopularProducts from '../../components/popularProducts/PopularProducts';
import ChooseUs from '../../components/chooseUs/ChooseUs.';
import { Link } from 'react-router-dom';

const Home = () => {   
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
            </section>
            <PopularProducts />
            <ChooseUs />
        </div>
    );
};

export default Home;