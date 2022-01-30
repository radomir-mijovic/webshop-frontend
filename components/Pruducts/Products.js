import React from 'react';
import {ProductsStyled} from "./ProductsStyled";
import {motion} from "framer-motion";

const Products = ({products}) => {

    const variants = {
        animate: i => ({
            opacity: 1,
            transition: {
                delay: i * .1
            }
        }),
        initial: {
            opacity: 0
        }
    }

    return (
        <ProductsStyled>
            {products.map((product, index) => {
                return (
                    <motion.div
                        custom={index}
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        key={index}
                        className='item'>
                        <div className="black-opacity"/>
                    </motion.div>
                )
            })}
        </ProductsStyled>
    );
};

export default Products;