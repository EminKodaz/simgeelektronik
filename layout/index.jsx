import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import PopupForm from "./PopupForm";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <PopupForm />
      <Footer />
    </>
  );
}

export default Layout;
