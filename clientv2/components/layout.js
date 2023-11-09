import Navigation from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
                {children}
            <Footer />
        </>
    )
}