import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 7rem;
  background: #F5AD92;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 3vw, 7rem);

  
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
    display: flex;
    flex-direction: column;
    position: relative;
    transition: color .5s ease;
    
    :hover {
      color: #00577F;
    }
  }
  
  .nav-search {
    width: 25rem;
  }
  
  .active {
    color: #00577F;
  }
  
  @media (max-width: 785px) {
    > h1,
    .nav-links,
    .nav-search {
      display: none;
    }
  }
`