import styles from './Home.module.css';
import backgroundImage from '/src/images/background/home-background.jpg';

const Home = () => {   
    return (
        <section className={styles.section}>
            <div className={styles.backgroundImageContainer}>
                <img src={backgroundImage} alt=""/>
            </div>           
        </section>
    );
};

export default Home;