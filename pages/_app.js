import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {CartProvider} from "../context/cart_context";
import {ProductProvider} from "../context/product_context";
import {AnimatePresence} from "framer-motion";


function MyApp({Component, pageProps}) {
    //TODO make cart scrollable

    return (
        <StyleProvider>
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
        </StyleProvider>
    )
}

export default MyApp
