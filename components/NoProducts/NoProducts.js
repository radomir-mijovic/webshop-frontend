import React from 'react';
import Image from "next/image";
import styled from "styled-components";

const NoProducts = () => {
    return (
        <ImageWrapper>
            <Image
                // width={500}
                // height={500}
                layout='fill'
                objectFit='scale-down'
                objectPosition='center'
                src='/assets/no_item.jpg'
                alt='no products img'/>
        </ImageWrapper>

    );
};

export default NoProducts;


const ImageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`