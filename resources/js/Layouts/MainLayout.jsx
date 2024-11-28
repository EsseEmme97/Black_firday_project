import Navbar from "@/Components/Navbar";

import Footer from "@/Components/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
