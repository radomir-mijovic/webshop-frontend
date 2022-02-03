import styled from "styled-components";
import {motion} from "framer-motion";

export const ProductsStyled = styled(motion.main)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(25rem, auto);
  grid-gap: .5rem;
  margin-bottom: .2rem;
  
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .item:first-child,
  .item:nth-of-type(3n + 1){
    grid-column: span 2;
    grid-row: span 2;
  }
  
  .product-name {
    color: #FFFF;
    z-index: 3;
    font-size: clamp(3rem, 4vw, 4rem);
  }
  
  .product-brand {
    color: #FFFF;
    z-index: 3;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  .product-code {
    color: #FFFF;
    z-index: 3;
    font-size: clamp(1rem, 2vw, 2rem);
  }
  
  .black-opacity {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    z-index: 2;
  }
  
  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

    .item:first-child,
    .item:nth-of-type(3n + 1){
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`