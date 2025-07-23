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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia autem tenetur molestias tempore corrupti? Non est culpa molestias architecto sed hic qui, in, ab nostrum sunt tenetur tempora libero temporibus molestiae facilis exercitationem expedita, perspiciatis eligendi ratione iste! Deleniti, ipsum.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia autem tenetur molestias tempore corrupti? Non est culpa molestias architecto sed hic qui, in, ab nostrum sunt tenetur tempora libero temporibus molestiae facilis exercitationem expedita, perspiciatis eligendi ratione iste! Deleniti, ipsum.</p>
                    </div>
                </div>                           
            </div>
        </section>
    );
};

export default About;