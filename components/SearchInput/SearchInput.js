import React from 'react';
import {SearchInputStyled} from "./SearchInputStyled";
import {BsSearch} from "react-icons/bs";

const SearchInput = ({height}) => {
    return (
        <SearchInputStyled height={height}>
            <div className="search-icon">
                <BsSearch/>
            </div>
            <input type="text" placeholder='search by name, code or brand'/>
        </SearchInputStyled>
    );
};

export default SearchInput;