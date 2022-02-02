import React, {useState} from 'react';
import {SearchButton, SearchInputStyled} from "./SearchInputStyled";
import {BsSearch} from "react-icons/bs";
import {useProductContext} from "../../context/product_context";
import {useRouter} from "next/router";
import {useStyleContext} from "../../context/style_context";
import {useCartContext} from "../../context/cart_context";

const SearchInput = ({height}) => {
    const [isText, setIsText] = useState('')
    const {setIsSidebar, filterProductHandler} = useProductContext()
    const {setIsCard} = useCartContext()
    const {setIsActiveClass, setIsActive} = useStyleContext()

    const router = useRouter()

    function searchHandler() {
        filterProductHandler(isText)
        setIsText('')
        setIsSidebar(false)
        setIsActive(false)
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
                onChange={e => {
                    setIsText(e.target.value)
                    setIsCard(false)
                }}
                type="text"
               />
            <SearchButton
                disabled={isText === '' && true}
                whileTap={{scale: .9}}
                onClick={searchHandler}
                type='button'>
                Search
            </SearchButton>
        </SearchInputStyled>
    );
};

export default SearchInput;