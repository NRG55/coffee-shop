import styles from './Filter.module.css';
import data from '../../data/products.json';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Filter = () => {   
    const types = ["Arabica", "Robusta", "Liberica", "Excelsa"];
    const setBrands = new Set(data.map((product) => product.brand));
    const brands = ["all", ...setBrands]; 
    let { brand } = useParams();     

    return (
        <>
            <div className={styles.filterContainer}> 
                <div className={styles.section}>
                    <h3>BRANDS</h3>
                    <div className={styles.buttonsContainer}>           
                        {brands.map((productBrand) =>
                            <div key={productBrand}>
                                <Link to={`/shop/${productBrand.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <button className={productBrand.toLowerCase() === brand.replace(/-/g, ' ') ? styles.active : styles.inactive} >{productBrand}</button>
                                </Link>                                
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.section}>           
                    <h3>COFFEE TYPE</h3>
                    <div className={styles.inputsContainer}>           
                        {types.map((type) =>
                            <div key={type} className={styles.inputWrapper}>                            
                                <label htmlFor={type}>{type}
                                    <input
                                        type="checkbox"
                                        id={type}
                                        name={type} 
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