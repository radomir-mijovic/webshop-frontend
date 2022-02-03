import React, {useEffect} from 'react';
import {ProductsStyled} from "./ProductsStyled";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import {useStyleContext} from "../../context/style_context";
import {useProductContext} from "../../context/product_context";
import NoProducts from "../NoProducts/NoProducts";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong";

const Products = () => {
    const {setIsActiveClass} = useStyleContext()
    const {isProducts} = useProductContext()

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

    if (!isProducts) {
        return <SomethingWentWrong/>
    }

    if (isProducts.length === 0) {
        return <NoProducts/>

    }

    return (
        <ProductsStyled>
            {isProducts.map((product, index) => {
                return (
                    <Link key={index} href={`/product/${product.slug}`} passHref>
                        <motion.div
                            onClick={() => setIsActiveClass(undefined)}
                            custom={index}
                            variants={variants}
                            animate='animate'
                            initial='initial'
                            className='item'>
                            <div className="black-opacity"/>
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src={product.image === null ? '/assets/no_image.png' : product.image}
                                alt='product image'/>
                            <h1 className='product-name'>
                                {product.name}
                            </h1>
                            <h3 className='product-brand'>
                                {product.brand}
                            </h3>
                            <h3 className='product-code'>
                                {product.code}
                            </h3>
                        </motion.div>
                    </Link>
                )
            })}
        </ProductsStyled>
    );
};

export default Products;