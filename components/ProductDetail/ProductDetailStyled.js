import styled from "styled-components";
import {motion} from "framer-motion";

export const ProductDetailStyled = styled.main`
  width: 100%;
  padding: clamp(3rem, 5vw, 10rem) clamp(1.5rem, 10vw, 20rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-gap: 3rem;
  justify-content: center;
  align-items: center;

  .image {
    position: relative;
  }

  .product-info {

    > p {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 1rem;
      line-height: 2.5rem;
      font-family: "Open Sans", serif;
    }
  }

  .brand {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .product-name {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2.8rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3rem;
  }

  @media (max-width: 500px) {
    
    .buttons {
      flex-direction: column;
      padding: 0 2.5rem;
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #00577F;
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: .5rem;

  > h2 {
    font-size: 2rem;
    color: #FFFF;
    //height: 100%;

  }

  > svg {
    cursor: pointer;
    height: 100%;
    width: 3rem;
    fill: #FFFF;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 1.5rem 0;
  }
`

export const AddToCartButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #F5AD92;
  width: 15rem;
  height: 4rem;
  padding: 0 2rem;
  border: none;
  border-radius: .5rem;
  color: #FFFF;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;

  > svg {
    fill: #FFFF;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`