import React from 'react';
import axios from "axios";

const ProductDetailPage = ({product}) => {

    return (
        <div>
            {product.name}
        </div>
    );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
    try {
        const id = context.query.id
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`)
        if (response) {
            return {
                props: {
                    product: response.data
                }
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