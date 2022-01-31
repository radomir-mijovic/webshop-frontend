import axios from "axios";
import Products from "../components/Pruducts/Products";
import Head from "next/head";


export default function Home() {

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
