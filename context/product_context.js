import React, {useContext, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const ProductContext = React.createContext()

export const ProductProvider = ({children, pageProps}) => {
    const {products} = pageProps
    const [isProducts, setIsProducts] = useState(products)
    const [filteredProducts, setFilteredProducts] = useState(products)
    const router = useRouter()

    async function filterProductHandler(text) {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/products?search=${text}`)
            setIsProducts(response.data)
        }
        catch (e) {
            router.replace('/')
        }

    }

    return (
        <ProductContext.Provider value={{
            isProducts,
            setIsProducts,
            filterProductHandler
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}