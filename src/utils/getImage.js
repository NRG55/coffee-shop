const getImage = (id) => {
    return new URL(`../images/products/${id}.png`, import.meta.url).href;
};

export default getImage;