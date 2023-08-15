import InviewAnimate from "@/components/Animation/InViewAnimate";
import ContactHeader from "@/components/Contact/ContactHeader";
import MapLocations from "@/components/Contact/MapLocations";
import SocialMedia from "@/components/Contact/SocialMedia";
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
      <div className="mt-40">
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="w-full"
        >
          <h1 className="text-[4rem] text-darkred">{t("contactHeader")}</h1>
          <br />
          <span className="text-[1rem] text-lightred">
            {t("contactDescription")}
          </span>
        </InviewAnimate>
        <ContactHeader />
        <MapLocations />
        {/* <SocialMedia /> */}
      </div>
    </main>
  );
}

export default Contact;
