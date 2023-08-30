import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import PopupForm from "./PopupForm";
import { useRouter } from "next/router";
import ScrollToTopButton from "./ScrollTop";

function Layout({ children }) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(null);

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [router.pathname]);

  return (
    <>
      <Navbar />
      {children}
      {isHomePage === true ? <ScrollToTopButton /> : <PopupForm />}
      <Footer />
    </>
  );
}

export default Layout;
