import styles from './CardsSection.module.css';
import Card from "../card/Card";
import getProducts from '../../utils/filter';
import { useParams } from 'react-router-dom';

const CardsSection = () => {
    const { category } = useParams();
    const products = getProducts(category);   

    return (
        <section className={styles.cardsSection}>
            {products.map((product) => 
                <Card key={`card${product.id}`} product={product} />
            )}
        </section>
    );
};

export default CardsSection;