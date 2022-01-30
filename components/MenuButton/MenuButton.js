import React from 'react';
import {MenuButtonStyled} from "./MenuButtonStyled";

const MenuButton = ({setIsSidebar, isActive, setIsActive}) => {

    function menuHandler() {
        setIsActive(prevState => !prevState)
        setIsSidebar(prevState => !prevState)
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