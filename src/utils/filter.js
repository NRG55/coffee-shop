import data from '../data/products.json';

const getProducts = (brand) => {
    if (brand === "all") {
        return data;
    };

    const products = data.filter((product) => product.brand.toLowerCase() === brand);    

    return products;
};

export const getProductById = (productId) => {    
    const filteredArray = data.filter((product) => product.id.toString() === productId);
    
    return filteredArray[0];
};

export default getProducts;