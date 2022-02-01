import React from 'react';
import AddNewProductForm from "../components/AddNewProductForm/AddNewProductForm";
import {motion} from "framer-motion";

const AddNewProduct = () => {
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