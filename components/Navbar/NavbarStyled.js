import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 7rem;
  background: #F5AD92;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(.5rem, 2.7vw, 5rem);

  
  > h1 {
    font-size: 3rem;
    color: #FFFF;
    cursor: pointer;
    z-index: 3;
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-link {
    color: #FFFF;
    font-size: 2rem;
    cursor: pointer;
    margin: 0 1rem;
    
    > a {
      color: #FFFF;
    }
  }
  
  @media (max-width: 850px) {
    .nav-links,
    .nav-search {
      display: none;
    }
  }
`