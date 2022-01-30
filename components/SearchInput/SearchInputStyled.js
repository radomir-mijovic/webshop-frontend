import styled from "styled-components";

export const SearchInputStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > input {
    padding: .5rem 2rem;
    border: none;
    border-radius: 1.5rem;
  }

  .search-icon {
    cursor: pointer;
    position: absolute;
    right: 5%;
  }
`