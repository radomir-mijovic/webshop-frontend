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
    const [isActiveClass, setIsActiveClass] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function menuHandler() {
        setIsSidebar(false)
        setIsActive(false)
    }

    return (
        <NavbarStyled>
            <Link href='/' passHref>
                <h1 onClick={menuHandler}>
                    MyShop
                </h1>
            </Link>
            <ul className='nav-links'>
                {navbar_links.map((item, index) => {
                    return (
                        <Link key={index} href={item.href} passHref>
                            <li onClick={() => setIsActiveClass(index)}
                                className={isActiveClass === index ? 'nav-link active' : 'nav-link'}>
                                {item.title}
                            </li>
                        </Link>
                    )
                })}
                {/*<li className='nav-link'>*/}
                {/*    Brands*/}
                {/*</li>*/}
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
                    isActiveClass={isActiveClass}
                    setIsActiveClass={setIsActiveClass}
                    menuHandler={menuHandler}/>}
            </AnimatePresence>
        </NavbarStyled>
    );
};

export default Navbar;