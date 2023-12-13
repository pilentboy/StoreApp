
import React, { createContext, useState, useEffect } from 'react';

// Create a context
const ProductContext = createContext();

// Create a context provider component
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Function to update the products state
    const updateProducts = (newProducts) => {
        setProducts(newProducts);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Read data from db.json using require (this is a synchronous operation)
                const response = await require('../db.json');
                const jsonContent = JSON.parse(JSON.stringify(response));

                // Update the state with the list of products and set loading to false
                setProducts(jsonContent.products);

            } catch (error) {
                console.error('Error reading db.json:', error);
            }

        };

        fetchData()

    }, []);

    return (
        <ProductContext.Provider value={{ products, updateProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider, ProductContext };

