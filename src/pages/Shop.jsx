import data from '../data/products.json';

const Shop = () => {
    return (
        <div>
            {data.map((product) => 
                <div>{product.name}</div>
            )}
        </div>
    )
};

export default Shop;