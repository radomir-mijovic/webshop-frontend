import axios from "axios";
import Products from "../components/Pruducts/Products";
import Head from "next/head";
import {useProductContext} from "../context/product_context";
import {useEffect} from "react";


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
        <>
            <Head>
                <title>
                    Web-Shop
                </title>
            </Head>
            <Products/>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/products')
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
