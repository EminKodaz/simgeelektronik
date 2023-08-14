import React from "react";
import Counter from "./Counter";
import useTranslation from "next-translate/useTranslation";

function HeaderLeftSide() {
  const { t } = useTranslation("home");
  return (
    <div className="max-lg:mb-10">
      <h1 className="text-5xl font-bold mb-5 text-darkred">
        {t("slogan-part-1")}
      </h1>
      <h1 className="text-5xl font-bold text-lightred">{t("slogan-part-2")}</h1>
      <div className="flex mt-5">
        <div className="w-7 h-7 bg-darkred rounded-full "></div>
        <div className="w-7 h-7 bg-lightred rounded-full ml-3"></div>
        <div className="w-7 h-7 bg-darkred rounded-full ml-3"></div>
      </div>
      <article className="font-medium text-zinc-500 mt-5 indent-2">
        {t("article-1")}
      </article>
      <div className="flex  mt-10 w-3/4 max-lg:w-full justify-between">
        <div className="flex flex-col items-center justify-center ">
          <Counter maxCount={11} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">{t("experience")}</p>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <Counter maxCount={32} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">{t("product")}</p>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <Counter maxCount={100} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">{t("project-done")}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeftSide;
