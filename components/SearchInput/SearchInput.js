import React, {useState} from 'react';
import {SearchInputStyled} from "./SearchInputStyled";
import {BsSearch} from "react-icons/bs";
import {useProductContext} from "../../context/product_context";
import {useRouter} from "next/router";
import {useStyleContext} from "../../context/style_context";

const SearchInput = ({height}) => {
    const [isText, setIsText] = useState('')
    const {setIsSidebar, filterProductHandler} = useProductContext()
    const {setIsActiveClass} = useStyleContext()
    const router = useRouter()

    function searchHandler() {
        filterProductHandler(isText)
        setIsText('')
        setIsSidebar(false)
        setIsActiveClass(0)
        router.replace('/')
    }

    return (
        <SearchInputStyled height={height}>
            <div className="search-icon">
                <BsSearch/>
            </div>
            <input
                value={isText}
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