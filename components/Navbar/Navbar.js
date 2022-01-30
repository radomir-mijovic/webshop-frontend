import React, {useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Link from "next/link";
import {navbar_links} from "../../helpers/navbar_links";
import SearchInput from "../SearchInput/SearchInput";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {AnimatePresence} from "framer-motion";

const Navbar = () => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [isActive, setIsActive] = useState(false)

    return (
        <NavbarStyled>
            <h1>
                MyShop
            </h1>
            <ul className='nav-links'>
                {navbar_links.map((item, index) => {
                    return (
                        <li className='nav-link' key={index}>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                <li className='nav-link'>
                    Brands
                </li>
            </ul>
            <div className='nav-search'>
                <SearchInput/>
            </div>
            <MenuButton
                isActive={isActive}
                setIsActive={setIsActive}
                setIsSidebar={setIsSidebar}/>
            <AnimatePresence>
                {isSidebar && <Sidebar
                    setIsActive={setIsActive}
                    setIsSidebar={setIsSidebar}/>}
            </AnimatePresence>
        </NavbarStyled>
    );
};

export default Navbar;