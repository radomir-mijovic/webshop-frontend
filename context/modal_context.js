import React, {useContext, useState} from "react";

const ModalContext = React.createContext()

export const ModalProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false)
    const [isModalMsg, setIsModalMsg] = useState('')

    return (
        <ModalContext.Provider value={{
            isModal,
            setIsModal,
            isModalMsg,
            setIsModalMsg
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext)
}

