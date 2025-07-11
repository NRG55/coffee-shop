import styles from './Filter.module.css';
import data from '../../data/products.json';

const Filter = () => {
    const setBrands = new Set(data.map((product) => product.brand));
    const brands = ["All", ...setBrands];

    return (
        <div className={styles.filter}>
            <div>                
                <ul>
                    {brands.map((brand, index) => 
                        <li key={`${brand + index}`}>{brand}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Filter;