import styled from "styled-components";
import {motion} from "framer-motion";

export const CartStyled = styled.div`
  z-index: 15;
  position: relative;
  height: auto;

  > svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: #FFFF;
    cursor: pointer;
  }
  
  .items-qty {
    position: absolute;
    right: -.2rem;
    top: -1.2rem;
    
    > h2 {
      color: #00577F;
    }
  }
  
  .cart {
    position: absolute;
    width: 30rem;
    max-height: 35rem;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: nowrap;
    right: 5%;
    top: 6rem;
    border-radius: .5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    background: #FFFF;
  }
  
  .cart-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00577F;
    padding: 1rem 2rem;
    
    > h1 {
      color: #00577F;
    }
    
    > svg {
      fill: #00577F;
      height: 2.3rem;
      width: 2.3rem;
      cursor: pointer;
    }
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;
    color: #00577F;
    
    >svg {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
    }
  }
  
  .product-info {
    display: flex;
    flex-direction: column;
    
    .price-span {
      margin-left: 1rem;
      color: #F5AD92;
    }
  }
  
  .empty-cart {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #00577F;
    
    > svg {
      height: 2.3rem;
      width: 2.3rem;
      fill: #F5AD92;
    }
  }
  
  .checkout-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
  }
`

export const CartButton = styled(motion.button)`
  width: 70%;
  height: 4rem;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  background: #F5AD92;
  color: #FFFF;
  font-size: 1.6rem;
  letter-spacing: .3rem;
`