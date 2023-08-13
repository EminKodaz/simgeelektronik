import ContactForm from "@/layout/Contact/ContactForm";
import React from "react";

function contact() {
  return (
    <main className="flex flex-col m-auto min-h-screen text-center">
      <div className=" mt-64">
        <h1 className="text-[4rem]">Contact Us</h1>
        <br />
        <span className="text-[2rem]">
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet,
        </span>
        <ContactForm />
      </div>
    </main>
  );
}

export default contact;
