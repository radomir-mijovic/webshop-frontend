import React, {useState} from 'react';
import Image from "next/image";
import {BiPlus, BiMinus, BiCart} from "react-icons/bi";
import {useCartContext} from "../../context/cart_context";
import {
    AddToCartButton,
    ProductDetailStyled,
    Quantity
} from "./ProductDetailStyled";


const ProductDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const {addToCart} = useCartContext()

    function addToCartHandler() {
        addToCart(
            product.name,
            product.image,
            product.price,
            quantity)
    }


    function quantityMinusHandler() {
        if (quantity === 1){
            return
        }
        setQuantity(prevState => prevState -1)
    }

    function quantityPlusHandler() {
        if (quantity === 5){
            return
        }
        setQuantity(prevState => prevState +1)
    }

    return (
        <ProductDetailStyled>
            <div className="image">
                <Image
                    width={500}
                    height={500}
                    // quality={100}
                    // layout='responsive'
                    // objectFit='cover'
                    src={product.image === null ? '/assets/no_image.png' : product.image}
                    alt='product image'/>
            </div>
            <div className="product-info">
                <h2 className="brand">
                    {product.brand}
                </h2>
                <h1 className="product-name">
                    {product.name}
                </h1>
                <p>
                    {product.description}
                </p>
                <h1 className='price'>
                    {product.price} €
                </h1>
                <div className="buttons">
                    <Quantity>
                        <BiMinus onClick={quantityMinusHandler}/>
                        <h2>{quantity}</h2>
                        <BiPlus onClick={quantityPlusHandler}/>
                    </Quantity>
                    <AddToCartButton
                        whileTap={{scale: .95}}
                        onClick={addToCartHandler}>
                        <BiCart/>
                        Add to cart
                    </AddToCartButton>
                </div>
            </div>
        </ProductDetailStyled>
    );
};

export default ProductDetail;