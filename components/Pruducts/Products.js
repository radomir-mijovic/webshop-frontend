import React from 'react';
import {ProductsStyled} from "./ProductsStyled";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from 'next/link'

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
                console.log(product.image)
                return (
                    <Link key={index} href='/' passHref>
                        <motion.div
                            custom={index}
                            variants={variants}
                            animate='animate'
                            initial='initial'
                            className='item'>
                            <div className="black-opacity"/>
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src={product.image}
                                alt='product image'/>
                            <h1 className='product-name'>
                                {product.name}
                            </h1>
                            <h3 className='product-brand'>
                                {product.brand}
                            </h3>
                        </motion.div>
                    </Link>
                )
            })}
        </ProductsStyled>
    );
};

export default Products;