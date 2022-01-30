import React from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Link from "next/link";
import {navbar_links} from "../../helpers/navbar_links";
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";
import MenuButton from "../MenuButton/MenuButton";

const Navbar = () => {
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
            <MenuButton/>
        </NavbarStyled>
    );
};

export default Navbar;