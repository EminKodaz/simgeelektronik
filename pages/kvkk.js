import useTranslation from "next-translate/useTranslation";
import React from "react";

function Kvkk() {
  const { t } = useTranslation("kvkk");
  return (
    <>
      <div className="flex flex-col ">
        <div className="mt-44 min-[2000px]:w-[60%] w-[75%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto mb-24">
          <h1 className="text-4xl font-bold text-center mb-8">{t("kvkk-head")}</h1>
          <p className="text-lg font-semibold text-zinc-600 text-justify">{t("kvkk-text")}</p>
        </div>
      </div>
    </>
  );
}

export default Kvkk;
