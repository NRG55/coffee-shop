import styles from './Filter.module.css';
import data from '../../data/products.json';
import { Link } from "react-router-dom";

const Filter = () => { 
    const categories = ["All", "Arabica", "Robusta", "Liberica", "Excelsa"];
    const setBrands = new Set(data.map((product) => product.brand));
    const brands = [...setBrands];

    return (
        <>
            <div className={styles.filterContainer}> 
                <div className={styles.section}>
                    <h3>CATEGORY</h3>
                    <div className={styles.buttonsContainer}>           
                        {categories.map((category) =>
                            <div key={category}>
                                <Link to={`/shop/${category.toLowerCase()}`}>
                                    <button >{category}</button>
                                </Link>
                                
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.section}>           
                    <h3>BRANDS</h3>
                    <div className={styles.inputsContainer}>           
                        {brands.map((brand) =>
                            <div key={brand} className={styles.inputWrapper}>                            
                                <label htmlFor={brand}>{brand}
                                    <input
                                        type="checkbox"
                                        id={brand}
                                        name={brand} 
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                        )}
                    </div>
                </div>             
            </div>            
        </>
    );
}

export default Filter;