import React, {useEffect} from 'react';
import styled from "styled-components";
import Image from "next/image";

const SomethingWentWrong = () => {

    useEffect(() => {
        location.reload()
    },[])

    return (
        <SomethingWentWrongStyled>
            <Image
                layout='fill'
                objectFit='scale-down'
                objectPosition='center'
                src='/assets/something_went_wrong.gif'
                alt='something went wrong img'/>
        </SomethingWentWrongStyled>
    );
};

export default SomethingWentWrong;


const SomethingWentWrongStyled = styled.main`
  width: 100%;
  height: 90vh;
  position: relative;
`