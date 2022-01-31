import styled from "styled-components";

export const MenuButtonStyled = styled.div`
  width: 3rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  z-index: 11;
  
  .item {
    width: 100%;
    background: #FFFF;
    height: .4rem;
    border-radius: 1.5rem;
    transition: all .4s ease;
  }
  
  .active-item-1 {
    transform: rotate(47deg);
    transform-origin: left top;
  }

  .active-item-3 {
    transform: rotate(-48deg);
    transform-origin: left bottom;
  }
  
  .item-2 {
    position: absolute;
    top: 45%;
    right: 20%;
  }
  
  .active-item-2 {
    opacity: 0;
    right: 70%;
  }

  @media (min-width: 786px) {
    display: none;
  }
`