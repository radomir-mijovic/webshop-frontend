import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {CartProvider} from "../context/cart_context";
import {ProductProvider} from "../context/product_context";


function MyApp({Component, pageProps}) {
    return (
        <StyleProvider>
            <CartProvider>
                <GlobalStyles/>
                <ProductProvider pageProps={pageProps}>
                <Navbar/>
                <Component {...pageProps} />
                </ProductProvider>
            </CartProvider>
        </StyleProvider>
    )
}

export default MyApp
