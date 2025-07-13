import data from '../data/products.json';

const getProducts = (brand) => {
    if (brand === "all") {
        return data;
    };

    const products = data.filter((product) => product.brand.toLowerCase() === brand);    

    return products;
};

export default getProducts;