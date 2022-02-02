import styled from "styled-components";
import {motion} from "framer-motion";

export const AddNewProductFormStyled = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60rem;
    height: auto;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 5rem 2rem;
    padding: 2rem 0;
  }
  
  .input-form {
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .input {
    width: 100%;
    border: none;
    height: 3rem;
    outline: none;
    position: relative;
    padding: 0 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    background: transparent;
    border-bottom: 2px solid #F5AD92;
    color: black;
  }
  
  input[type='file'] {
    display: none;
  }
  
  .error-msg {
    color: red;
    font-size: 1.4rem;
  }
  
  .label {
    font-size: 2rem;
    color: black;
  }
  
  .label-image {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    > svg {
      margin: 0 2rem;
    }
  }
  
  .image__h2 {
    font-size: 1.4rem;
  }
`

export const FormButton = styled(motion.button)`
  background: #F5AD92;
  border: none;
  height: 3.5rem;
  border-radius: 1.5rem;
  color: #FFFF;letter-spacing: .1rem;
  font-size: 2rem;
  margin: 2rem 2rem;
  cursor: pointer;
`

export const FormH1 = styled.h1`
  font-size: 3rem;
  color: #F5AD92;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`