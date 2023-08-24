import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill, BsFillPrinterFill } from "react-icons/bs";
import { FaLocationDot, FaMobileRetro } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function ContactInfos() {
  const { t } = useTranslation();
  const [contactOne, setContactOne] = useState({});
  const [contactTwo, setContactTwo] = useState({});
  const [contactTab, setContactTab] = useState(1);

  useEffect(() => {
    setContactOne(t("contact:locationOne", {}, { returnObjects: true }));
    setContactTwo(t("contact:locationTwo", {}, { returnObjects: true }));
  }, [t]);

  const handleContactTab = (index) => {
    if (index == 1) {
      setContactTab(1);
    } else {
      setContactTab(2);
    }
  };

  return (
    <div className="min-w-full max-h-fit min-h-full md:w-1/2 flex flex-col gap-6 justify-between md:px-6 md:py-6 py-4 text-white">
      <h1 className="text-2xl font-bold text-center text-white">
        {t("contact:contactInfo")}
      </h1>
      <div className="flex sm:flex-row md:flex-col lg:flex-row flex-col gap-6 w-full text-center text-xl">
        <button
          className={`hover:bg-white hover:text-zinc-700  w-full sm:w-3/3 min-h-full px-4 py-2 rounded-lg border duration-200 ${
            contactTab == 1 && "bg-white text-zinc-700"
          }`}
          onClick={() => handleContactTab(1)}
        >
          {contactOne.name}
        </button>
        <button
          className={`hover:bg-white hover:text-zinc-700 w-full sm:w-3/3 px-4 py-2 rounded-lg border duration-200 ${
            contactTab == 2 && "bg-white text-zinc-700"
          }`}
          onClick={() => handleContactTab(2)}
        >
          {contactTwo.name}
        </button>
      </div>
      {contactTab == 1 ? (
        <div className="min-w-full min-h-full flex flex-col items-start md:px-6 py-3 gap-4 duration-200">
          {/* <h1>{contactOne.name}</h1> */}
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <FaLocationDot size={20} />
            <span>{contactOne.address}</span>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <BsFillTelephoneFill size={20} />
            <span>{contactOne.phone}</span>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <FaMobileRetro size={20} />
            <span>{contactOne.mobilePhone}</span>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <BsFillPrinterFill size={20} />
            <span>{contactOne.fax}</span>
          </div>
        </div>
      ) : (
        <div className="min-w-full min-h-full flex flex-col items-start md:px-6 py-3 gap-4 duration-200">
          {/* <h1>{contactTwo.name}</h1> */}
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <FaLocationDot size={20} />
            <span>{contactTwo.address}</span>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <BsFillTelephoneFill size={20} />
            <span>{contactTwo.phone}</span>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
            <BsFillPrinterFill size={20} />
            <span>{contactTwo.fax}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:items-start md:px-6">
        <div className="flex gap-2 md:gap-6 justify-start align-middle items-center">
          <HiMail size={20} />
          <h1>Mail Adresleri</h1>
        </div>
        <div className="flex flex-col justify-start items-start md:pl-[2.7rem]">
          <p>info@simgeelektronik.com.tr</p>{" "}
          <p>muhasebe@simgeelektronik.com.tr</p>
          <p>bayibasvuru@simgeelektronik.com.tr</p>{" "}
          <p>ahm@simgeelektronik.com.tr</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfos;
