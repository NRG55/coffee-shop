import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import brands from '../../data/brands';
import coffeeTypes from '../../data/coffeeTypes';
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from 'react-router-dom';
import { getCoffeeTypes } from '../../utils/filter';

const Filter = () => { 
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
    const { brand } = useParams();  
    const coffeeTypesByBrand = getCoffeeTypes(brand, coffeeTypes);

    return (
        <>
            <div className={styles.filterContainer}> 
                <div className={styles.section}>
                    <h3>Brands</h3>
                    <div className={styles.buttonsContainer}>
                        <div>
                            <Link to={`/shop/all`}>
                                <button className={brand === 'all' ? styles.active : styles.inactive}>All</button>
                            </Link>
                        </div>           
                        {brands.map((element) =>
                            <div key={element.id}>
                                <Link to={`/shop/${element.brand.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <button className={element.brand.toLowerCase() === brand.replace(/-/g, ' ') ? styles.active : styles.inactive} >{element.brand}</button>
                                </Link>                                
                            </div>
                        )}
                    </div>
                </div>
                {coffeeTypesByBrand.length > 1 
                    ?   <div className={styles.section}>           
                            <h3>Coffee Type</h3>
                            <div className={styles.inputsContainer}>           
                                {coffeeTypesByBrand.map((element) =>
                                    <div key={element.type} className={styles.inputWrapper}>                            
                                        <label htmlFor={element.type.toLowerCase()}>{element.type}
                                            <input
                                                type="checkbox"
                                                id={element.type.toLowerCase()}
                                                name={element.type.toLowerCase()} 
                                                checked={element.type.toLowerCase() === coffeeTypesParams.find((type) => type === element.type.toLowerCase())}
                                                onChange={(event) => handleCoffeeTypeFilter(event, element.type.toLowerCase())}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div> 
                    :   null
                }            
            </div>            
        </>
    );
}

Filter.propTypes = {
    brands: PropTypes.array,
    coffeeTypes: PropTypes.array,
    getCoffeeTypes: PropTypes.func.isRequired,
    coffeeTypesParams: PropTypes.array,
    coffeeTypesByBrand: PropTypes.array,
    brand: PropTypes.string
}

export default Filter;