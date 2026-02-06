// utils/getProductById.js

import productData from "../data/productData";

export const getProductById = (id) => {
  const allProducts = [
    ...productData.laptops,
    ...productData.smartphones,
    ...productData.wearables,
    ...productData.audio,
  ];

  return allProducts.find((p) => p.id === id);
};
