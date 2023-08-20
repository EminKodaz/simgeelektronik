import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import InviewAnimate from "../Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function MapLocations() {
  const { t } = useTranslation();
  const [contactOne, setContactOne] = useState({});
  const [contactTwo, setContactTwo] = useState({});

  useEffect(() => {
    setContactOne(t("contact:locationOne", {}, { returnObjects: true }));
    setContactTwo(t("contact:locationTwo", {}, { returnObjects: true }));
  }, [t]);

  return (
    <div className="w-full m-auto gap-6 flex flex-col my-12">
      <h3 className="border-b text-center border-darkred mb-2 pb-2 text-darkred text-4xl font-medium">
        {t("contact:locationsHeader")}
      </h3>
      <InviewAnimate bezier={bezier} translate="translateX(300px)">
        <div className="rounded-2xl grid grid-cols-1 md:grid-cols-3 md:gap-6 justify-between items-center">
          <div className="text-2xl text-lightred font-bold py-4">
            {contactOne.name}
          </div>
          <div className="rounded-xl md:col-span-2 overflow-hidden shadow-2xl">
            <iframe
              className="w-full"
              src={contactOne.map}
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </InviewAnimate>
      <InviewAnimate bezier={bezier} translate="translateX(-300px)">
        <div className="rounded-2xl grid grid-cols-1 md:grid-cols-3 md:gap-6 justify-between items-center">
          <div className="rounded-xl md:col-span-2 overflow-hidden shadow-2xl">
            <iframe
              src={contactTwo.map}
              className="w-full"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-2xl order-first md:order-last py-4 text-lightred font-bold">
            {contactTwo.name}
          </div>
        </div>
      </InviewAnimate>
    </div>
  );
}

export default MapLocations;
