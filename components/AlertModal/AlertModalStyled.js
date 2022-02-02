import styled from "styled-components";
import {motion} from "framer-motion";

export const AlertModalStyled = styled(motion.div)`
  position: absolute;
  top: 5%;
  right: 10%;
  width: 30rem;
  min-height: 15rem;
  background: #fff7f6;
  z-index: 30;
  border-radius: 7px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  > h2 {
    color: black;
    font-size: 1.6rem;
    font-weight: 300;
  }
  
  .modal {
    position: absolute;
    right: 5%;
    top: 5%;

    > svg {
      height: 2.7rem;
      width: 2.7rem;
      cursor: pointer;
    }
  }
`