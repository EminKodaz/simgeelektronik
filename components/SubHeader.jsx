import useTranslation from "next-translate/useTranslation";
import React from "react";
import InviewAnimate from "./Animation/InViewAnimate";
import Link from "next/link";
import { RiAlarmWarningLine } from "react-icons/ri";
import { VscGithubAction } from "react-icons/vsc";
import {
  AiOutlineCustomerService,
  AiOutlineNotification,
} from "react-icons/ai";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function SubHeader() {
  const { t } = useTranslation("home");

  return (
    <InviewAnimate bezier={bezier} translate="translateY(300px)  ">
      <h2 className="z-20  relative mt-16 mb-8 text-5xl font-bold text-darkred text-center max-lg:mt-8 max-lg:text-3xl  w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto ">
        {t("solutions-head")}
      </h2>
      <section className="grid  shadow-2xl grid-cols-4 max-lg:grid-cols-1 w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto  rounded-4xl mb-12 max-lg:mb-0 text-white bg-[url('/images/footerImg.jpg')] bg-cover relative z-30">
        <div className="bg-lightrans  rounded-l-4xl max-lg:rounded-bl-none max-lg:rounded-t-4xl px-7 py-12 flex flex-col items-center hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans">
          <VscGithubAction size={80} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("innovate")}
          </h3>
          <p className="text-center">{t("innovate-p")}</p>
        </div>
        <div className=" px-7 py-12 flex flex-col items-center bg-lightrans hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans">
          <RiAlarmWarningLine size={80} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("high-quality")}
          </h3>
          <p className="text-center">{t("high-quality-p")}</p>
        </div>
        <div className="px-7 py-12 flex flex-col items-center bg-lightrans hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans">
          <AiOutlineCustomerService size={80} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("best-product")}
          </h3>
          <p className="text-center">{t("best-product-p")}</p>
        </div>
        <div className="px-7 py-12 flex flex-col items-center bg-lightrans rounded-r-4xl max-lg:rounded-tr-none max-lg:rounded-b-4xl hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans">
          <AiOutlineNotification size={80} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("top-services")}
          </h3>
          <p className="text-center">{t("top-services-p")}</p>
        </div>
      </section>
    </InviewAnimate>
  );
}

export default SubHeader;
