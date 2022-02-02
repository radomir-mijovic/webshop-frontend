import React, {useEffect} from 'react';
import axios from "axios";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import {motion} from "framer-motion";
import {useProductContext} from "../../context/product_context";

const ProductDetailPage = ({product}) => {
    const {isSidebar} = useProductContext()

    useEffect(() => {
        if (isSidebar) {
            document.body.style.overflowY = "hidden"
        }
        else if(!isSidebar) {
            document.body.style.overflowY = "auto"
        }
    }, [isSidebar])

    return (
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .7}}
            exit={{opacity: 0}}>
            <Head>
                <title>
                    {product.name}
                </title>
            </Head>
            <ProductDetail product={product}/>
        </motion.main>
    );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
    try {
        const id = context.query.id
        const response = await axios.get(`https://nordhealth.herokuapp.com/api/product/${id}`)

        return {
            props: {
                product: response.data
            }
        }
    }
    catch (e) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
}