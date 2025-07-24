import styles from './CardsSection.module.css';
import Card from "../card/Card";
import { getProducts } from '../../utils/filter';
import { useParams, useSearchParams } from 'react-router-dom';

const CardsSection = () => {
    const [searchParams] = useSearchParams();
    const coffeeTypesParams = searchParams.getAll("type") || [];
    const { brand } = useParams();

    const productsByBrand = getProducts(brand.replace(/-/g, ' '));
    const productsByCoffeType = [];
    let products;

    if (coffeeTypesParams.length) {
        coffeeTypesParams.forEach((type) => {
        const filteredArray = productsByBrand.filter(
            (product) => product.type.toLowerCase() === type
        );

        productsByCoffeType.push(filteredArray);
        });
    };  
     
    if (productsByCoffeType.length) {
        products = productsByCoffeType.flat();
    } else {
        products = productsByBrand;
    };
     
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