import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Next Portfolio",
    description: "Next Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-light dark:bg-dark w-full min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
