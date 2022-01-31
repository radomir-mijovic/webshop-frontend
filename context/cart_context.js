import React, {useContext, useReducer} from "react";
import {cart_reducer} from "../reducer/cart_reducer";

const CartContext = React.createContext()

const initialState = {
    cartProducts: []
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)

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

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}