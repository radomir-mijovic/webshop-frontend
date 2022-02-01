import React from 'react';
import {MenuButtonStyled} from "./MenuButtonStyled";
import {useStyleContext} from "../../context/style_context";
import {useProductContext} from "../../context/product_context";
import {useCartContext} from "../../context/cart_context";

const MenuButton = () => {
    const {isActive, setIsActive} = useStyleContext()
    const {setIsSidebar} = useProductContext()
    const {setIsCard} = useCartContext()

    function menuHandler() {
        setIsActive(prevState => !prevState)
        setIsSidebar(prevState => !prevState)
        setIsCard(false)
    }

    return (
        <MenuButtonStyled onClick={menuHandler}>
            <div className={`item ${isActive ? 'active-item-1' : undefined}`}/>
            <div className={`item item-2 ${isActive ? 'active-item-2' : undefined}`}/>
            <div className={`item ${isActive ? 'active-item-3' : undefined}`}/>
        </MenuButtonStyled>
    );
};

export default MenuButton;