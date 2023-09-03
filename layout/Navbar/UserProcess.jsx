import React, { useState, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import Link from "next/link";
import i18nConfig from "../../i18n.json";
import { BsChevronDown } from "react-icons/bs";
import { MdPayment, MdPerson, MdQuestionMark, MdReport } from "react-icons/md";

function UserProcess({ isMobile }) {
  const { t } = useTranslation("navbar");
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const userProcessRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        userProcessRef.current &&
        !userProcessRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${isMobile && "mb-2"} relative ml-5`} ref={userProcessRef}>
      <button
        onClick={handleButtonClick}
        className={`${
          isMobile ? "text-base" : ""
        } flex items-center py-1 justify-center px-2 text-sm  duration-100  border border-zinc-400 rounded-md`}
      >
        <MdPerson size={18} className="mr-1" />
        {t("user-process")}
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
          padding: isVisible ? "0.75rem" : "0",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          height: isVisible ? "auto" : "0",
          padding: isVisible ? "0.75rem" : "0",
        }}
        className={`${
          isMobile ? "text-base" : ""
        } absolute flex flex-col top-[2.2rem] backdrop-blur-base border z-40 border-zinc-300  rounded-md w-full  p-3 bg-white`}
      >
        <Link
          className="mb-3 max-lg:mb-1 flex items-center hover:text-red-600 font-light rounded-lg"
          href="/password-demand"
          onClick={handleButtonClick}
        >
          <MdQuestionMark className="text-red-600 mr-1" />
          {t("password-ac")}
        </Link>
        <Link
          className=" flex items-center  hover:text-red-600 font-light rounded-lg"
          href="http://88.250.21.119:180/Login.aspx"
          target="_blank"
          onClick={handleButtonClick}
        >
          <MdReport className="text-red-600 mr-1" />
          {t("alarm-report")}
        </Link>
        <Link
          className=" flex items-center mt-3 max-lg:mt-1 hover:text-red-600 font-light rounded-lg"
          href="/payments"
          onClick={handleButtonClick}
        >
          <MdPayment className="text-red-600 mr-1" />
          {t("payments")}
        </Link>
      </motion.div>
    </div>
  );
}

export default UserProcess;
