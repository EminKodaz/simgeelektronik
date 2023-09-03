import React from "react";
import Counter from "./Counter";
import useTranslation from "next-translate/useTranslation";

function Information() {
  const { t } = useTranslation("home");
  return (
    <div className="z-20 grid grid-cols-3 w-[75%] max-lg:grid-cols-1  min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto text-center mt-5 ">
      <div className="border py-5 rounded-l-3xl max-lg:rounded-t-3xl max-lg:rounded-bl-none">
        <Counter maxCount={29} />
        <h2 className="text-2xl font-bold">{t("info-head-1")}</h2>
      </div>
      <div className="border py-5 ">
        <Counter maxCount={50} />
        <h2 className="text-2xl font-bold">{t("info-head-2")}</h2>
      </div>
      <div className="border py-5 rounded-r-3xl max-lg:rounded-b-3xl max-lg:rounded-tr-none">
        <Counter maxCount={100} />
        <h2 className="text-2xl font-bold">{t("info-head-3")}</h2>
      </div>
    </div>
  );
}

export default Information;
