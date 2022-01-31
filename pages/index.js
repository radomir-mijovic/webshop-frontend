import axios from "axios";
import Products from "../components/Pruducts/Products";
import useSWR from 'swr'

export default function Home() {

    const fetcher = url => axios.get(url).then(res => res.data)


    return (
        <>
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
