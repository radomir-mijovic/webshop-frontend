import styled from "styled-components";
import {motion} from "framer-motion";

export const ProductsStyled = styled(motion.main)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(25rem, auto);
  grid-gap: .5rem;
  margin-top: .5rem;
  
  .item {
    background: grey;
  }
  
  .item:first-child,
  .item:nth-of-type(3n + 1){
    grid-column: span 2;
    grid-row: span 2;
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