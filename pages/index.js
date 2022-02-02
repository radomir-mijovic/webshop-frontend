import axios from "axios";
import Products from "../components/Pruducts/Products";
import Head from "next/head";
import {useProductContext} from "../context/product_context";
import {useEffect} from "react";
import {motion} from "framer-motion";


export default function Home() {
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
                    Web-Shop
                </title>
            </Head>
            <Products/>
        </motion.main>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get('https://nordhealth.herokuapp.com/api/products')
        return {
            props: {
                products: response.data
            }
        }
    }

    catch (e) {
        return {
            notFound: true
        }
    }

}
