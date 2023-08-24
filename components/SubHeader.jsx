import useTranslation from "next-translate/useTranslation";
import React from "react";
import { IoBulbSharp } from "react-icons/io5";
import { FaHandSparkles } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import InviewAnimate from "./Animation/InViewAnimate";
const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function SubHeader() {
  const { t } = useTranslation("home");

  return (
    <InviewAnimate bezier={bezier} translate="translateY(300px)">
      <section className="grid grid-cols-4 max-lg:grid-cols-1 w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto mt-28 max-lg:mt-12  rounded-4xl mb-12 max-lg:mb-0 text-white bg-[url('/images/footerImg.jpg')] bg-cover">
        <div className="bg-lightrans max-lg:bg-darkred rounded-l-4xl max-lg:rounded-bl-none max-lg:rounded-t-4xl px-7 py-12 flex flex-col items-center">
          <IoBulbSharp size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("innovate")}
          </h3>
          <p>{t("innovate-p")}</p>
        </div>
        <div className=" px-7 py-12 flex flex-col items-center bg-lightrans">
          <FaHandSparkles size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("high-quality")}
          </h3>
          <p>{t("high-quality-p")}</p>
        </div>
        <div className="relative">
          <div className="bg-darktrans max-lg:hidden absolute w-full px-10 py-16 rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="flex mt-5 absolute bottom-5">
              <div className="flex mt-5 items-center">
                <div className="w-24 h-2 bg-lightrans rounded-full mr-3"></div>
                <div className="w-4 h-4 bg-[#ffffff83] rounded-full "></div>
              </div>
            </div>
            <TbStars size={50} className="mb-5 " />
            <h3 className="text-center mb-3 text-2xl font-medium">
              {t("best-product")}
            </h3>
            <p>{t("best-product-p")}</p>
          </div>
          <div className="lg:hidden px-7 bg-darktrans py-12 flex flex-col items-center">
            <FaHandSparkles size={50} className="mb-5" />
            <h3 className="text-center mb-3 text-2xl font-medium">
              {t("best-product")}
            </h3>
            <p>{t("best-product-p")}</p>
          </div>
        </div>
        <div className="px-7 py-12 flex flex-col items-center bg-lightrans rounded-r-4xl max-lg:rounded-tr-none max-lg:rounded-b-4xl">
          <FaGears size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("top-services")}
          </h3>
          <p>{t("top-services-p")}</p>
        </div>
      </section>
    </InviewAnimate>
  );
}

export default SubHeader;
