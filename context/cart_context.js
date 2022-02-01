import React, {useContext, useReducer, useState} from "react";
import {cart_reducer} from "../reducer/cart_reducer";

const CartContext = React.createContext()

const initialState = {
    cartProducts: []
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)
    const [isCard, setIsCard] = useState(false)

    function addToCart(name, image, price, quantity) {
        const product = {
            name,
            image,
            price,
            quantity
        }
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    function removeProduct(name) {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: name
        })
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeProduct,
            isCard,
            setIsCard
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}