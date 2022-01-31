import React, {useState} from 'react';
import {SearchInputStyled} from "./SearchInputStyled";
import {BsSearch} from "react-icons/bs";
import {useProductContext} from "../../context/product_context";

const SearchInput = ({height, setIsSidebar}) => {
    const [isText, setIsText] = useState('')
    const {filterProductHandler} = useProductContext()

    function searchHandler() {
        filterProductHandler(isText)
        setIsSidebar(false)
        setIsText('')
    }

    return (
        <SearchInputStyled height={height}>
            <div className="search-icon">
                <BsSearch/>
            </div>
            <input
                onChange={e => setIsText(e.target.value)}
                type="text"
                placeholder='search...'/>
            <button onClick={searchHandler} type='button'>
                search
            </button>
        </SearchInputStyled>
    );
};

export default SearchInput;