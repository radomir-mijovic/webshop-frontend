import React, {useEffect} from 'react';
import {AlertModalStyled} from "./AlertModalStyled";
import {VscClose} from "react-icons/vsc";
import {useModalContext} from "../../context/modal_context";
import {motion, useAnimation} from "framer-motion";

const AlertModal = () => {
    const {isModal, setIsModal, isModalMsg} = useModalContext()
    const controls = useAnimation()

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({
                rotateZ: 180
            })
            setIsModal(false)
        }, 4000)
        return () => clearTimeout(timer)
    }, [isModal])

    return (
        <AlertModalStyled
            initial={{opacity: 0, y: '-30%'}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .4}}
            exit={{opacity: 0, y: '-40%', transition:{
                delay: .5
                }}}>
            <motion.div
                whileTap={{rotateZ: 180}}
                animate={controls}
                className="modal">
                <VscClose onClick={() => setIsModal(false)}/>
            </motion.div>
            <h2>{isModalMsg}</h2>
        </AlertModalStyled>
    );
};

export default AlertModal;