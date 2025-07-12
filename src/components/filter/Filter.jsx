import styles from './Filter.module.css';
import data from '../../data/products.json';

const Filter = () => {
    const setBrands = new Set(data.map((product) => product.brand));
    const brands = [...setBrands];

    return (
        <>
            <div className={styles.filterContainer}> 
                <h3>Brands</h3>
                <div className={styles.inputsContainer}>           
                    {brands.map((brand, index) =>
                        <div key={`${brand + index}`} className={styles.inputWrapper}>                            
                            <label htmlFor={brand}>{brand}
                                <input
                                    type="checkbox"
                                    id={brand}
                                    name={brand} 
                                />
                                <span class={styles.checkmark}></span>
                            </label>
                        </div>
                    )}
                </div>            
            </div>            
        </>
    );
}

export default Filter;