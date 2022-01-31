import styled from "styled-components";
import {motion} from "framer-motion";

export const CartStyled = styled.div`
  z-index: 3;
  cursor: pointer;
  position: relative;

  > svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: #FFFF;
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
    height: 20rem;
    right: 5%;
    top: 6rem;
    //border: 1px solid #00577F;
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
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

export const CartButton = styled(motion.button)`
  
`