import styles from './CardsSection.module.css';
import Card from "../card/Card";
import data from '../../data/products.json';

const CardsSection = () => {
    return (
        <section className={styles.cardsSection}>
            {data.map((product) => 
                <Card key={`card${product.id}`} product={product} />
            )}
        </section>
    );
};

export default CardsSection;