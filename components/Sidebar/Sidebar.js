import React from 'react';
import {SidebarStyled} from "./SidebarStyled";
import {navbar_links} from "../../helpers/navbar_links";
import Link from "next/link";
import SearchInput from "../SearchInput/SearchInput";
import {motion} from "framer-motion";
import {useProductContext} from "../../context/product_context";
import {useStyleContext} from "../../context/style_context";
import {useCartContext} from "../../context/cart_context";

const Sidebar = () => {
    const {getAll, setIsSidebar} = useProductContext()
    const {isActiveClass, setIsActiveClass, setIsActive} = useStyleContext()
    const {setIsCard} = useCartContext()

    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * .3
            }
        }),
        hidden: {
            opacity: 0
        }
    }


    return (
        <SidebarStyled
            initial={{opacity: 0, x: '-100%'}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: .4}}
            exit={{opacity: 0, x: '-100%'}}>
            <SearchInput height={'4rem'}/>
            <div className="links">
                {navbar_links.map((item, index) => {
                    return (
                        <Link passHref
                              href={item.href}
                              key={index}>
                            <motion.h2
                                className={isActiveClass === index ? 'link_h2 active' : 'link_h2'}
                                custom={index}
                                variants={variants}
                                initial='hidden'
                                animate='visible'
                                onClick={() => {
                                    setIsActiveClass(index);
                                    getAll();
                                    setIsCard(false)
                                    setIsSidebar(false)
                                    setIsActive(false)
                                }}>
                                {item.title}
                            </motion.h2>
                        </Link>
                    )
                })}
            </div>
        </SidebarStyled>
    );
};

export default Sidebar;