import styled from "styled-components";
import {motion} from "framer-motion";

export const SearchInputStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.5rem;
  width: 100%;
  height: ${props => props.height ? props.height : '3.5rem'};
  padding: 0 1rem;
  background: #FFFF;
  
  > input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 1.5rem;
    outline: none;
    padding-left: 1rem;
  }

  .search-icon {
    cursor: pointer;
    background: #FFFF;
    
    > svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const SearchButton = styled(motion.button)`
  padding: .3rem 1rem;
  border: none;
  background: #F5AD92;
  color: #FFFF;
  border-radius: 1.4rem;
`