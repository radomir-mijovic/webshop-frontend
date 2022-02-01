export const cart_reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        const theItem = state.cartProducts.find(item =>
           item.name === action.payload.name
        )

        if (theItem) {
            return {
                ...state,
                cartProducts: [
                    ...state.cartProducts, ...state.cartProducts.filter(item => {
                    if (item.name === theItem.name) {
                        item.quantity = action.payload.quantity
                    }
                })]
            }
        }

        return {
            ...state,
            cartProducts: [...state.cartProducts, action.payload]
        }
    }

    if (action.type === 'UPDATE_QUANTITY') {
        const {name, quantity} = action.payload
        return {
            ...state,
            cartProducts: state.cartProducts.find(item => item.quantity = quantity)
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        return {
            ...state,
            cartProducts: state.cartProducts.filter((item) => {
                return item.name !== action.payload
            })
        }
    }
}