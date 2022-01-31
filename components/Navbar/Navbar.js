import React, {useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Link from "next/link";
import {navbar_links} from "../../helpers/navbar_links";
import SearchInput from "../SearchInput/SearchInput";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {AnimatePresence} from "framer-motion";
import Cart from "../Cart/Cart";
import {useStyleContext} from "../../context/style_context";

const Navbar = () => {
    const {isActiveClass, setIsActiveClass} = useStyleContext()
    const [isSidebar, setIsSidebar] = useState(false)
    const [isActive, setIsActive] = useState(false)

    function menuHandler() {
        setIsSidebar(false)
        setIsActive(false)
    }

    return (
        <NavbarStyled>
            <Link href='/' passHref>
                <h1 onClick={() => {
                    setIsSidebar(false);
                    setIsActive(false);
                    setIsActiveClass(0)
                }}>
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
            </ul>
            <div className='nav-search'>
                <SearchInput setIsSidebar={setIsSidebar}/>
            </div>
            <MenuButton
                isActive={isActive}
                setIsActive={setIsActive}
                setIsSidebar={setIsSidebar}/>
            <Cart/>
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