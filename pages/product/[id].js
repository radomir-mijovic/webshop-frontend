import React from 'react';
import axios from "axios";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import {motion} from "framer-motion";

const ProductDetailPage = ({product}) => {

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
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`)

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