import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import Link from "next/link";
import i18nConfig from "../../i18n.json";
import { BsChevronDown } from "react-icons/bs";

function LangItems({ isMobile }) {
  const { t, lang } = useTranslation("navbar");
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const { locales } = i18nConfig;

  return (
    <div className="relative ml-5">
      <button
        onClick={handleButtonClick}
        className={`${
          isMobile ? "text-lg" : ""
        } flex items-center py-1 justify-center px-2 text-sm  duration-100  border border-zinc-400 rounded-md`}
      >
        {lang.toUpperCase()}
        <BsChevronDown
          size={17}
          className={`${
            isVisible ? "rotate-180" : "rotate-0"
          } ml-2 duration-200`}
        />
      </button>
      <motion.div
        style={{
          opacity: isVisible ? 1 : 0,
          overflow: "hidden",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          height: isVisible ? "auto" : 0,
        }}
        className={`${
          isMobile ? "text-lg" : ""
        } absolute flex flex-col top-[2.2rem] backdrop-blur-lg border border-zinc-300  rounded-md w-16  bg-white`}
      >
        {locales &&
          locales.map((lng) => {
            if (lng === lang) return null;
            return (
              <Link
                className="text-center duration-300 ease-in-out p-1"
                onClick={handleButtonClick}
                href="/"
                locale={lng}
                key={lng}
              >
                {t(`${lng.toUpperCase()}`)}
              </Link>
            );
          })}
      </motion.div>
    </div>
  );
}

export default LangItems;
