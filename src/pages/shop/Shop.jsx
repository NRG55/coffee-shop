import styles from './Shop.module.css';
import Filter from '../../components/filter/Filter';
import CardsSection from '../../components/cardsSection/CardsSection';

const Shop = () => {
    return (       
        <div className={styles.mainContainer}>
            <Filter />
            <CardsSection />
        </div>
    )
};

export default Shop;