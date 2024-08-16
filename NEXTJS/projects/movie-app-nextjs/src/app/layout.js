import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "Watch your favorite movies and series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
