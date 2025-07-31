import styles from './Shop.module.css';
import Filter from '../../components/shopPageComponents/filter/Filter';
import { Outlet } from 'react-router-dom';

const Shop = () => {
    return (       
        <div className={styles.mainContainer}>
            <Filter />
            <Outlet />
        </div>
    );
};

export default Shop;