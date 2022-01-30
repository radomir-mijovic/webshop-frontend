import styled from "styled-components";
import {motion} from "framer-motion";

export const SidebarStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: #C67486;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > h2 {
    color: #FFFF;
    font-size: clamp(3rem, 5vw, 3.5rem);
    cursor: pointer;
    margin: 1rem 0;
  }
`