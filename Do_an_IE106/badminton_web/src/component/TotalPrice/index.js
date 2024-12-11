// TotalPriceContext.js
import React, { createContext, useState, useContext } from 'react';

// Tạo context
const TotalPriceContext = createContext();

// Hook để sử dụng context
export const useTotalPrice = () => useContext(TotalPriceContext);

// Provider để bao bọc ứng dụng
export const TotalPriceProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = (newTotalPrice) => {
        setTotalPrice(newTotalPrice);
    };

    return (
        <TotalPriceContext.Provider value={{ totalPrice, updateTotalPrice }}>
            {children}
        </TotalPriceContext.Provider>
    );
};
