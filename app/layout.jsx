import { Inter } from "next/font/google";
import "@/public/assets/css/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import bootstrap CSS
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import MenuLateral from "@/components/MenuLateral";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuLateral />
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
