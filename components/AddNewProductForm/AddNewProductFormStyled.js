import styled from "styled-components";
import {motion} from "framer-motion";

export const AddNewProductFormStyled = styled.main`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > form {
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60rem;
    height: 50rem;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 5rem 2rem;
    padding: 2rem 0;

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
    margin-top: 1rem;
  }
  
  .error-msg {
    color: red;
    font-size: 1.4rem;
  }
  
  .label {
    font-size: 2rem;
    color: black;
  }
`

export const FormButton = styled(motion.button)`
  background: #F5AD92;
  border: none;
  height: 3.5rem;
  border-radius: 1.5rem;
  color: #FFFF;letter-spacing: .1rem;
  font-size: 2rem;
  margin: 0 2rem;
`