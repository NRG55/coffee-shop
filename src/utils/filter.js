import data from '../data/products.json';

export const getCoffeeTypes = (brand, coffeeTypes) => {   
    if (brand === 'all') {
        return coffeeTypes;
    };

    const tempArray = [];

    const products = data.filter((product) => product.brand.replace(/\s+/g, '-').toLowerCase() === brand);
    const coffeeTypesSet = new Set(products.map((product) => product.type.toLowerCase()));
    const coffeeTypesArray = [...coffeeTypesSet];
    const sortedByNameCoffeTypeArray = coffeeTypesArray.sort(); 
  
    sortedByNameCoffeTypeArray.forEach((coffeeType) => {
        const filteredArray = coffeeTypes.filter((object) => object.type.toLowerCase() === coffeeType);

        tempArray.push(filteredArray[0]);
    });

    return tempArray;
};

export const getProductById = (productId) => {    
    const filteredArray = data.filter((product) => product.id.toString() === productId);
    
    return filteredArray[0];
};

export const getPopularProducts = () => {    
    const filteredArray = data.filter((product) => product.popular === true);
    
    return filteredArray;
};

export const getProducts = (brand) => {
    if (brand === 'all') {
        return data;
    }

    const filteredProducts = data.filter((product) => product.brand.toLowerCase() === brand);

    return filteredProducts;
};

