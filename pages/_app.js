import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {CartProvider} from "../context/cart_context";
import {ProductProvider} from "../context/product_context";
import {AnimatePresence} from "framer-motion";
import {ModalProvider} from "../context/modal_context";


function MyApp({Component, pageProps}) {

    return (
        <StyleProvider>
            <ModalProvider>
                <CartProvider>
                    <ProductProvider pageProps={pageProps}>
                        <GlobalStyles/>
                        <Navbar/>
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
