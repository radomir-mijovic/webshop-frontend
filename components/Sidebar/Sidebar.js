import React from 'react';
import {SidebarStyled} from "./SidebarStyled";
import {navbar_links} from "../../helpers/navbar_links";
import Link from "next/link";
import SearchInput from "../SearchInput/SearchInput";

const Sidebar = ({setIsSidebar, setIsActive}) => {

    function sidebarHandler() {
        setIsSidebar(false)
        setIsActive(false)
    }

    return (
        <SidebarStyled
            initial={{opacity: 0, x: '-100%'}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: .4}}
            exit={{opacity: 0, x: '-100%'}}>
            <SearchInput/>
            {navbar_links.map((item, index) => {
                return (
                    <Link passHref
                        href={item.href}
                        key={index}>
                        <h2 onClick={sidebarHandler}>
                            {item.title}
                        </h2>
                    </Link>
                )
            })}
            <h2 onClick={sidebarHandler}>Brands</h2>
        </SidebarStyled>
    );
};

export default Sidebar;