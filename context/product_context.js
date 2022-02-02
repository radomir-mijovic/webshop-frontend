import React, {useContext, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const ProductContext = React.createContext()

export const ProductProvider = ({children, pageProps}) => {
    const {products} = pageProps
    const [isProducts, setIsProducts] = useState(products)
    const [isSidebar, setIsSidebar] = useState(false)
    const router = useRouter()

    async function filterProductHandler(text) {
        try {
            const response = await axios.get(`https://nordhealth.herokuapp.com/api/products?search=${text}`)
            setIsProducts(response.data)
        }
        catch (e) {
            router.replace('/')
        }

    }

    async function getAll() {
        try {
            const response = await axios.get('https://nordhealth.herokuapp.com/api/products')
            setIsProducts(response.data)
        }
        catch (e) {
            return
        }
    }

    return (
        <ProductContext.Provider value={{
            isProducts,
            setIsProducts,
            isSidebar,
            setIsSidebar,
            filterProductHandler,
            getAll
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}