import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";


function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
