import React, {useEffect} from 'react';
import {CartButton, CartStyled} from "./CartStyled";
import {FaOpencart} from "react-icons/fa";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import {useCartContext} from "../../context/cart_context";
import {BiTrash, BiSad} from "react-icons/bi";
import {VscClose} from "react-icons/vsc";
import Image from "next/image";

const Cart = () => {
    const controls = useAnimation()
    const {
        cartProducts,
        removeProduct,
        isCard,
        setIsCard
    } = useCartContext()


    let totals = []

    function productTotal(price, quantity) {
        const itemTotal = price * quantity
        totals = [...totals, itemTotal]
        return itemTotal
    }

    useEffect(() => {
        controls.start({
            scale: 1
        })
    }, [cartProducts.length])

    return (
        <CartStyled>
            <div className="items-qty">
                {cartProducts.length > 0 &&
                <motion.h2
                initial={{scale: 1.5}}
                animate={controls}
                transition={{duration: .5}}>
                    {cartProducts.length}
                </motion.h2>}
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
                        <VscClose onClick={() => setIsCard(false)}/>
                    </div>
                    <div className="cart-items">
                        {cartProducts.map((item, index) => {
                            const {name, image, price, quantity} = item;
                            return (
                                <div className='cart-item' key={index}>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={image === null ? '/assets/no_image.png' : image}
                                        alt='item image'/>
                                    <div className="product-info">
                                        <h2>{name}</h2>
                                        <h2>
                                            {price} x {quantity}
                                            <span className='price-span'>
                                                {productTotal(price, quantity).toFixed(2)} €
                                            </span>
                                        </h2>
                                    </div>
                                    <BiTrash onClick={() => removeProduct(name)}/>
                                </div>
                            )
                        })}
                        {cartProducts.length === 0 ?
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                className='empty-cart'>
                                <h2>Nothing in the cart yet...</h2>
                                <BiSad/>
                            </motion.div>
                            :
                            <>
                                <div className="cart-info">
                                    <h1>Total</h1>
                                    <h1>{totals.reduce((a, b) => a + b).toFixed(2)} €</h1>
                                </div>
                                <div className="checkout-btn">
                                    <CartButton whileTap={{scale: .95}}>
                                        Checkout
                                    </CartButton>
                                </div>
                            </>
                        }
                    </div>
                </motion.div>}
            </AnimatePresence>

        </CartStyled>
    );
};

export default Cart;