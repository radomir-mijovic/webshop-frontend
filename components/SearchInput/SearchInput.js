import React from 'react';
import {SearchInputStyled} from "./SearchInputStyled";
import Image from "next/image";

const SearchInput = () => {
    return (
        <SearchInputStyled>
            <input type="text" placeholder='Name / Brand / Code'/>
            <div className="search-icon">
                <Image
                    width='17'
                    height='17'
                    src="/assets/icons/search.svg"
                    alt="search icon"/>
            </div>
        </SearchInputStyled>
    );
};

export default SearchInput;