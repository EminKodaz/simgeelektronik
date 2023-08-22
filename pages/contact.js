import InviewAnimate from "@/components/Animation/InViewAnimate";
import ContactHeader from "@/components/Contact/ContactHeader";
import MapLocations from "@/components/Contact/MapLocations";
import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Contact() {
  const [locationsInfo, setLocationsInfo] = useState([]);
  const { t } = useTranslation("contact");

  useEffect(() => {
    setLocationsInfo(t("locations", {}, { returnObjects: true }));
    console.log(locationsInfo, " BURADA");
  }, [t]);

  return (
    <main className="flex flex-col m-auto min-h-screen text-center">
      <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
      <div className="z-10 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="w-full"
        >
          <section className="md:mt-44">
            <h1 className="text-6xl text-darkred text-center">
              {t("contactHeader")}
            </h1>
            <div className="flex mt-5 justify-center">
              <div className="w-7 h-7 bg-darkred rounded-full "></div>
              <div className="w-7 h-7 bg-lightred rounded-full ml-3"></div>
              <div className="w-7 h-7 bg-darkred rounded-full ml-3"></div>
            </div>
            <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
              {t("contactDescription")}
            </p>
          </section>
        </InviewAnimate>
        <ContactHeader />
        <MapLocations />
      </div>
    </main>
  );
}

export default Contact;
