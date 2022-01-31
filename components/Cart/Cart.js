import React, {useState} from 'react';
import {CartButton, CartStyled} from "./CartStyled";
import {FaOpencart} from "react-icons/fa";
import {GrClose} from "react-icons/gr";
import {AnimatePresence, motion} from "framer-motion";
import {useCartContext} from "../../context/cart_context";

const Cart = () => {
    const [isCard, setIsCard] = useState(false)
    const {cartProducts} = useCartContext()
    console.log(cartProducts)

    return (
        <CartStyled>
            <div className="items-qty">
                <h2>3</h2>
            </div>
            <FaOpencart onClick={() => setIsCard(prevState => !prevState)}/>
            <AnimatePresence>
                {isCard &&
                <motion.div
                    initial={{opacity: 0, y: '-30%'}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: '-20%'}}
                    transition={{duration: .4}}
                    className="cart">
                    <div className="cart-info">
                        <h1>Cart</h1>
                        <GrClose onClick={() => setIsCard(false)}/>
                    </div>
                    <div className="cart-items">

                    </div>
                    <CartButton>
                        Checkout
                    </CartButton>
                </motion.div>}
            </AnimatePresence>
        </CartStyled>
    );
};

export default Cart;