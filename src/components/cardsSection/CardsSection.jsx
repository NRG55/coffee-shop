import styles from './CardsSection.module.css';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Card from "../card/Card";
import { getProducts } from '../../utils/filter';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

const CardsSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const coffeeTypesParams = searchParams.getAll("type") || [];
    const { brand } = useParams();
    const pageSize = 8;

    const productsByBrand = getProducts(brand.replace(/-/g, ' '));
    const productsByCoffeType = [];
    let filteredProducts;

    if (coffeeTypesParams.length) {
        coffeeTypesParams.forEach((type) => {
        const filteredArray = productsByBrand.filter(
            (product) => product.type.toLowerCase() === type
        );

        productsByCoffeType.push(filteredArray);
        });
    };  
     
    if (productsByCoffeType.length) {
        filteredProducts = productsByCoffeType.flat();
    } else {
        filteredProducts = productsByBrand;
    };

    const productsOnPage = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [filteredProducts, currentPage]);

    const onPageChange = (onPage) => {
        setSearchParams((prev) => ({
            ...prev,
            page: onPage,
            type: [...coffeeTypesParams]
        }));
    };
     
    return (
        <section className={styles.section}>
            <div className={styles.cardsContainer}>                
                {productsOnPage.map((product) => 
                    <Card key={`card${product.id}`} product={product} />
                )}
            </div> 
            <Pagination
                currentPage={currentPage}
                totalCount={filteredProducts.length}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />                       
        </section>
    );
        
};

CardsSection.propTypes = {
    productsByBrand: PropTypes.array.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    productsOnPage: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
}

export default CardsSection;