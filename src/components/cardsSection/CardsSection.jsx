import styles from './CardsSection.module.css';
import Card from "../card/Card";
import getProducts from '../../utils/filter';
import { useParams } from 'react-router-dom';

const CardsSection = () => {
    const { brand } = useParams();
    const products = getProducts(brand.replace(/-/g, ' '));   

    return (
        <section>
            <div className={styles.container}>
                {products.map((product) => 
                    <Card key={`card${product.id}`} product={product} />
                )}
            </div>
        </section>
    );
};

export default CardsSection;