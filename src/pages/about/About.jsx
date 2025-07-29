import styles from './About.module.css';
import coffeeMapImage from '/home/dmitry/repos/coffee-shop/src/images/about/coffee-map.png';
import coffeeCupImage from '/home/dmitry/repos/coffee-shop/src/images/about/coffee-cup.jpg';

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div> 
                    <div className={styles.info}>
                        <h2>About Us</h2>
                        <p>We believe that exceptional coffee starts with respect for the land and the people who cultivate it. That's why we are dedicated to sourcing our beans from farms that practice sustainable agriculture and prioritize fair wages for their workers. Every cup you brew with our beans is a step towards a more ethical and environmentally conscious coffee experience.</p>
                        <p>We're a family-owned coffee shop dedicated to bringing you the freshest, most flavorful beans from around the world.</p>
                    </div> 
                    <div className={styles.imageWrapper}>
                        <img src={coffeeCupImage} alt="Coffee cup"/>
                    </div> 
                </div> 
                <div>
                    <div className={styles.imageWrapper}>
                        <img src={coffeeMapImage} alt="Map"/>
                    </div>
                    <div className={styles.info}>
                        <h2>Worldwide</h2>
                        <p>Experience the rich flavors of our expertly roasted coffee beans, now available for delivery to your doorstep, anywhere in the world. Discover the world of coffee with our carefully curated selection.</p>
                        <p>Order your favorite beans today with worldwide shipping.</p>
                    </div>
                </div>                           
            </div>
        </section>
    );
};

export default About;