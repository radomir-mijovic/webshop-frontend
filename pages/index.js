import axios from "axios";

export default function Home({products}) {

    return (
        <>
            {products.map(item => {
                return (
                   <li key={item.name}>{item.name}</li>
                )
            })}
        </>
    )
}

export async function getServerSideProps() {
    const response = await axios.get('http://127.0.0.1:8000/api/products')

    return {
        props: {
            products: response.data
        }
    }
}
