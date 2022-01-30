import React, {useState} from 'react';
import {MenuButtonStyled} from "./MenuButtonStyled";

const MenuButton = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <MenuButtonStyled onClick={() => setIsActive(prevState => !prevState)}>
            <div className={`item ${isActive ? 'active-item-1' : undefined}`}/>
            <div className={`item item-2 ${isActive ? 'active-item-2' : undefined}`}/>
            <div className={`item ${isActive ? 'active-item-3' : undefined}`}/>
        </MenuButtonStyled>
    );
};

export default MenuButton;