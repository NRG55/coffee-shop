import data from '../data/products.json';

const getProducts = (category) => {
    if (category === "all") {
        return data;
    };

    const products = data.filter((product) => product.type === category);

    return products;
};

export default getProducts;