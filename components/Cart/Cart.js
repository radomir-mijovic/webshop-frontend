import React, {useState} from 'react';
import {CartButton, CartStyled} from "./CartStyled";
import {FaOpencart} from "react-icons/fa";
import {GrClose} from "react-icons/gr";
import {AnimatePresence, motion} from "framer-motion";
import {useCartContext} from "../../context/cart_context";
import {BiTrash} from "react-icons/bi";
import Image from "next/image";

const Cart = () => {
    const [isCard, setIsCard] = useState(false)
    const {cartProducts, removeProduct} = useCartContext()

    function productTotal(price, quantity) {
        return price * quantity
    }

    function total(price, quantity) {
        return productTotal(price, quantity).reduce((a, b) => a + b)
    }


    return (
        <CartStyled>
            <div className="items-qty">
                {cartProducts.length > 0 && <h2>{cartProducts.length}</h2>}

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
                        {cartProducts.map((item, index) => {
                            const {name, image, price, quantity} = item;
                            return (
                                <div className='cart-item' key={index}>
                                    {/*<Image*/}
                                    {/*    width={50}*/}
                                    {/*    height={50}*/}
                                    {/*    src={image}*/}
                                    {/*    alt='item image'/>*/}
                                    <div className="product-info">
                                        <h2>{name}</h2>
                                        <h2>
                                            {price}.00 x {quantity}
                                            <span className='price-span'>
                                                {productTotal(price, quantity)}.00 €
                                            </span>
                                        </h2>
                                    </div>
                                    <BiTrash onClick={() => removeProduct(name)}/>
                                </div>
                            )
                        })}
                        <div className="cart-info">
                            <h1>Total</h1>
                            <h1>{}</h1>
                        </div>
                        <CartButton>
                            Checkout
                        </CartButton>
                    </div>
                </motion.div>}
            </AnimatePresence>

        </CartStyled>
    );
};

export default Cart;