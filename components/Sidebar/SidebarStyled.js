import styled from "styled-components";
import {motion} from "framer-motion";

export const SidebarStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #C67486;
  padding: 15rem 7rem;
  z-index: 10;

  > :first-child {
    margin-bottom: 7rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .link_h2 {
    color: #FFFF;
    font-size: clamp(3rem, 5vw, 3.5rem);
    cursor: pointer;
    margin: 1rem 0;
  }

  .active {
    color: #765E8D;
  }
`