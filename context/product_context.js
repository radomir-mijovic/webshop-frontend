import React, {useContext, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {useModalContext} from "./modal_context";

const ProductContext = React.createContext()

export const ProductProvider = ({children, pageProps}) => {
    const {products} = pageProps
    const [isProducts, setIsProducts] = useState(products)
    const [isSidebar, setIsSidebar] = useState(false)
    const {setIsModalMsg, setIsModal} = useModalContext()
    const router = useRouter()

    async function filterProductHandler(text) {
        try {
            const response = await axios.get(`https://nordhealth.herokuapp.com/api/products?search=${text}`)
            setIsProducts(response.data)
        }
        catch (e) {
            setIsModalMsg('Something went wrong, please try again latter')
            setIsModal(true)
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