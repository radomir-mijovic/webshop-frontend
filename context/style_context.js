import React, {useContext, useState} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isActiveClass, setIsActiveClass] = useState(0)
    const [isActive, setIsActive] = useState(false)

    return (
        <StyleContext.Provider value={{
            isActiveClass,
            setIsActiveClass,
            setIsActive,
            isActive
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => {
    return useContext(StyleContext)
}