import React, {useContext, useReducer} from "react";
import {cart_reducer} from "../reducer/cart_reducer";

const CartContext = React.createContext()

const initialState = {
    products: []
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)

    return (
        <CartContext.Provider value={{

        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}