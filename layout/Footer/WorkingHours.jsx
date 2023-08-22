import useTranslation from "next-translate/useTranslation";
import React from "react";

function WorkingHours() {
  const { t } = useTranslation("footer");
  return (
    <div className="flex flex-col items-start mx-auto gap-3">
      <h1 className="text-white text-center text-xl font-bold">
        {t("workTimeHeader")}
      </h1>
      <p className=" text-zinc-300 text-center">{t("workTime")}</p>
      <p className=" text-zinc-300 text-center">{t("workTimeWeekend")}</p>
    </div>
  );
}

export default WorkingHours;
