import React, {useEffect} from 'react';
import AddNewProductForm from "../components/AddNewProductForm/AddNewProductForm";
import {motion} from "framer-motion";
import {useProductContext} from "../context/product_context";

const AddNewProduct = () => {
    const {isSidebar} = useProductContext()

    useEffect(() => {
        if (isSidebar) {
            document.body.style.overflowY = "hidden"
        }
        else if(!isSidebar) {
            document.body.style.overflowY = "auto"
        }
    }, [isSidebar])

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .7}}
            exit={{opacity: 0}}>
            <AddNewProductForm/>
        </motion.div>
    );
};

export default AddNewProduct;