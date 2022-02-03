import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {CartProvider} from "../context/cart_context";
import {ProductProvider} from "../context/product_context";
import {AnimatePresence} from "framer-motion";
import {ModalProvider} from "../context/modal_context";
import {useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import {Router} from "next/router";


function MyApp({Component, pageProps}) {
    const [isProgressBar, setIsProgressBar] = useState(false)

    Router.events.on('routeChangeStart', () => {
        setIsProgressBar(true)
    })

    Router.events.on('routeChangeComplete', () => {
        setIsProgressBar(false)
    })

    return (
        <StyleProvider>
            <ModalProvider>
                <CartProvider>
                    <ProductProvider pageProps={pageProps}>
                        <GlobalStyles/>
                        <Navbar/>
                            {isProgressBar && <TopBarProgress/>}
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter>
                            <Component {...pageProps} />
                        </AnimatePresence>
                    </ProductProvider>
                </CartProvider>
            </ModalProvider>
        </StyleProvider>
    )
}

export default MyApp
