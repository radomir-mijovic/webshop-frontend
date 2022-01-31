import axios from "axios";
import Products from "../components/Pruducts/Products";

export default function Home({products}) {

    return (
        <>
            <Products products={products}/>
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
