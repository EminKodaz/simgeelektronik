import useTranslation from "next-translate/useTranslation";
import React from "react";

function SubHeader() {
  const { t } = useTranslation("home");

  return (
    <section className="grid grid-cols-4 w-[75%] max-lg:w-[90%] m-auto mt-20 bg-lightred rounded-xl mb-20 text-white ">
      <div className=" px-7 py-12 ">
        <h3 className="text-center mb-3 text-2xl font-medium">{t("innovate")}</h3>
        <p>{t("innovate-p")}</p>
      </div>
      <div className=" px-7 py-12 ">
        <h3 className="text-center mb-3 text-2xl font-medium">{t("high-quality")}</h3>
        <p>{t("high-quality-p")}</p>
      </div>
      <div className="relative">
        <div className="bg-darkred absolute w-full px-10 py-16 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-center mb-3 text-2xl font-medium">{t("best-product")}</h3>
          <p>{t("best-product-p")}</p>
        </div>
      </div>
      <div className=" px-7 py-12 ">
        <h3 className="text-center mb-3 text-2xl font-medium">{t("top-services")}</h3>
        <p>{t("top-services-p")}</p>
      </div>
    </section>
  );
}

export default SubHeader;
