const getImage = (id) => {
    return new URL(`../images/products/${id}.webp`, import.meta.url).href;
};

export default getImage;