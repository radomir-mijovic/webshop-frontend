import React from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Link from "next/link";
import {navbar_links} from "../../helpers/navbar_links";
import SearchInput from "../SearchInput/SearchInput";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {AnimatePresence} from "framer-motion";
import Cart from "../Cart/Cart";
import {useStyleContext} from "../../context/style_context";
import {useProductContext} from "../../context/product_context";
import {useCartContext} from "../../context/cart_context";
import AlertModal from "../AlertModal/AlertModal";
import {useModalContext} from "../../context/modal_context";

const Navbar = () => {
    const {isActiveClass, setIsActiveClass, setIsActive} = useStyleContext()
    const {getAll, isSidebar, setIsSidebar} = useProductContext()
    const {setIsCard} = useCartContext()
    const {isModal} = useModalContext()

    return (
        <NavbarStyled>
            <Link href='/' passHref>
                <h1 onClick={() => {
                    setIsSidebar(false);
                    setIsActive(false);
                    setIsActiveClass(0);
                    setIsCard(false)
                    getAll()
                }}>
                    MyShop
                </h1>
            </Link>
            <ul className='nav-links'>
                {navbar_links.map((item, index) => {
                    return (
                        <Link key={index} href={item.href} passHref>
                            <li onClick={() => {
                                setIsActiveClass(index)
                                setIsCard(false)
                            }}
                                className={isActiveClass === index ? 'nav-link active' : 'nav-link'}>
                                {item.title}
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <div className='nav-search'>
                <SearchInput/>
            </div>
            <MenuButton/>
            <Cart/>
            <AnimatePresence>
                {isSidebar && <Sidebar/>}
                {isModal && <AlertModal/>}
            </AnimatePresence>
        </NavbarStyled>
    );
};

export default Navbar;