import styles from './Shop.module.css';
import Filter from '../../components/filter/Filter';
import { Outlet, useSearchParams } from 'react-router-dom';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const coffeeTypesParams = searchParams.getAll("type") || [];

    const handleCoffeeTypeFilter = (event, coffeeType) => {      
        const currentCoffeeType = coffeeTypesParams.includes(coffeeType);

        if (currentCoffeeType && !event.target.checked) {
            const filteredCoffeeTypes = coffeeTypesParams.filter((type) => type !== coffeeType);

            return setSearchParams((prev) => ({
                ...prev,
                   type: filteredCoffeeTypes
            }));
        };

        setSearchParams((prev) => ({
            ...prev,
               type: [...coffeeTypesParams, coffeeType]
        }));

    };

    return (       
        <div className={styles.mainContainer}>
            <Filter coffeeTypesParams={coffeeTypesParams} handleCoffeeTypeFilter={handleCoffeeTypeFilter}/>
            <Outlet />
        </div>
    );
};

export default Shop;