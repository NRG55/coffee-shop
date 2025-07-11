import data from '../../data/products.json';
import Card from '../../components/card/Card';

const Shop = () => {
    return (
        <div>
            {data.map((product) => 
                <Card key={`card${product.id}`} product={product} />
            )}
        </div>
    )
};

export default Shop;