import Head from "next/head";
import React from "react";
import ContactInfos from "./ContactInfos";
import InviewAnimate from "../Animation/InViewAnimate";
import ContactForm from "./ContactForm";
import { MdMail, MdPhone } from "react-icons/md";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function ContactHeader() {
  return (
      <div className="min-h-fit mb-32">
        <div className="w-full mt-6 flex flex-col justify-center items-center m-auto">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(300px)"
            className="w-full"
          >
            <div className="w-full relative h-full md:h-[36rem] md:px-8 md:py-4 px-3 gap-2 mt-14 flex flex-col md:flex-row justify-between items-center md:rounded-[2.5rem] rounded-2xl bg-lightred">
              <MdMail className="absolute z-10 right-24 bottom-16 text-[#ffffff7e] max-lg:hidden" size={140} />
              <MdPhone className="absolute z-10 right-24 bottom-62 text-[#ffffff7e] max-lg:hidden" size={140}/>
              <InviewAnimate
                bezier={bezier}
                translate="translateX(300px)"
                className="w-full"
              >
                <ContactForm />
              </InviewAnimate>
              <InviewAnimate
                bezier={bezier}
                translate="translateX(-300px)"
                className="w-full"
              >
                <ContactInfos />
              </InviewAnimate>
            </div>
          </InviewAnimate>
          {/*  */}
        </div>
      </div>
  );
}

export default ContactHeader;
