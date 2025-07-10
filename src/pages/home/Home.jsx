import styles from './Home.module.css';
import backgroundImage from '/src/images/background/home-background.jpg';

const Home = () => {   
    return (
        <section className={styles.section}>
            <div className={styles.backgroundImageContainer}>
                <img src={backgroundImage} alt=""/>
            </div>
            <div className={styles.infoContainer}>
                <h1>Find Your Flavor</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis, reprehenderit labore et ab nulla iusto corporis nihil blanditiis expedita.</p>
                <button>Shop Now</button>
            </div>           
        </section>
    );
};

export default Home;