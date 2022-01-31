export const cart_reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        console.log(action.payload)
        return {
            ...state,
            cartProducts: [...state.cartProducts, action.payload]
        }
    }
}