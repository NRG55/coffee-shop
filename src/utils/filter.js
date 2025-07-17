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

export const getPopularProducts = () => {    
    const filteredArray = data.filter((product) => product.popular === true);
    
    return filteredArray;
};

export default getProducts;