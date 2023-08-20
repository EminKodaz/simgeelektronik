import Head from "next/head";
import React from "react";
import ContactInfos from "./ContactInfos";
import InviewAnimate from "../Animation/InViewAnimate";
import ContactForm from "./ContactForm";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function ContactHeader() {
  return (
    <>
      <Head>
        <title>Simge Elektronik İletişim Sayfası</title>
        <meta name="description" content="F" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SİMGE ELEKTRONİK"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-52">
        <div className="min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%] mt-6 flex flex-col justify-center items-center">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(300px)"
            className="w-full"
          >
            <div className="w-full h-full md:h-[36rem] md:px-8 md:py-4 px-3 gap-2 mt-14 flex flex-col md:flex-row justify-between items-center md:rounded-[2.5rem] rounded-2xl bg-lightred">
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
      </main>
    </>
  );
}

export default ContactHeader;
