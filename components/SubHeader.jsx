import useTranslation from "next-translate/useTranslation";
import React from "react";
import InviewAnimate from "./Animation/InViewAnimate";
import Link from "next/link";
import { BiSolidHome } from "react-icons/bi";
import { GiCctvCamera } from "react-icons/gi";
import { BsBuildingsFill, BsFillBuildingFill } from "react-icons/bs";
const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function SubHeader() {
  const { t } = useTranslation("home");

  return (
    <InviewAnimate bezier={bezier} translate="translateY(300px)  ">
      <h2 className="z-20 relative mt-16 mb-8 text-5xl font-bold text-darkred text-center max-lg:mt-8 max-lg:text-3xl  w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto ">
        {t("solutions-head")}
      </h2>
      <section className="grid grid-cols-4 max-lg:grid-cols-1 w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto  rounded-4xl mb-12 max-lg:mb-0 text-white bg-[url('/images/footerImg.jpg')] bg-cover relative z-30">
        <Link
          href="/services/is-yeri-cozumleri"
          className="bg-lightrans max-lg:bg-darkred rounded-l-4xl max-lg:rounded-bl-none max-lg:rounded-t-4xl px-7 py-12 flex flex-col items-center hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans"
        >
          <BsFillBuildingFill size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("innovate")}
          </h3>
          <p>{t("innovate-p")}</p>
        </Link>
        <Link
          href="/services/ev-cozumleri"
          className=" px-7 py-12 flex flex-col items-center bg-lightrans hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans"
        >
          <BiSolidHome size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("high-quality")}
          </h3>
          <p>{t("high-quality-p")}</p>
        </Link>
        <Link
          href="/services/kurumsal-cozumler"
          className="px-7 py-12 flex flex-col items-center bg-lightrans hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans"
        >
          <BsBuildingsFill size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("best-product")}
          </h3>
          <p>{t("best-product-p")}</p>
        </Link>
        <Link
          href="/products"
          className="px-7 py-12 flex flex-col items-center bg-lightrans rounded-r-4xl max-lg:rounded-tr-none max-lg:rounded-b-4xl hover:scale-110 duration-300 hover:rounded-3xl hover:bg-darktrans"
        >
          <GiCctvCamera size={50} className="mb-5" />
          <h3 className="text-center mb-3 text-2xl font-medium">
            {t("top-services")}
          </h3>
          <p>{t("top-services-p")}</p>
        </Link>
      </section>
    </InviewAnimate>
  );
}

export default SubHeader;
