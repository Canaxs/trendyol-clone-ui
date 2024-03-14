import React, { createContext, useState } from 'react';
import productData from './ProductData';
import productImage from "./ProductImage";

export const TrendyolContext = createContext();

const TrendyolProvider = ({ children }) => {

    const [productList, setProductList] = useState(productData);
    const [productImageList , setProductImageList] = useState(productImage);

    return (
        <TrendyolContext.Provider value={{ product: [productList , setProductList], image: [productImageList, setProductImageList] }}>
            {children}
        </TrendyolContext.Provider>
    );
};

export default TrendyolProvider;