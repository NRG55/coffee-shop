import styles from './Home.module.css';
import backgroundImage from '/src/images/background/home-background.jpg';
import PopularProducts from '../../components/popularProducts/PopularProducts';
import ChooseUs from '../../components/chooseUs/ChooseUs.';
import { Link } from 'react-router-dom';

const Home = () => {   
    return (
        <>
            <section className={styles.section}>
                <div className={styles.backgroundImageContainer}>
                    <img src={backgroundImage} alt=""/>
                </div>
                <div className={styles.infoContainer}>
                    <h1>Find Your Flavor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis, reprehenderit labore et ab nulla iusto corporis nihil blanditiis expedita.</p>
                    <Link to="./shop/all">
                        <button className={styles.button}>Shop Now</button>
                    </Link>               
                </div>                
            </section>
            <PopularProducts />
            <ChooseUs />
        </>
    );
};

export default Home;