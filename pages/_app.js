import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {CartProvider} from "../context/cart_context";


function MyApp({Component, pageProps}) {
    return (
        <StyleProvider>
            <CartProvider>
                <GlobalStyles/>
                <Navbar/>
                <Component {...pageProps} />
            </CartProvider>
        </StyleProvider>
    )
}

export default MyApp
