import useTranslation from "next-translate/useTranslation";
import React from "react";

function WorkingProcess() {
  const { t } = useTranslation("home");

  return (
    <section className="w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto  mb-16">
      <h2 className="text-center text-3xl font-bold mb-3 text-lightred">{t("working-process")}</h2>
      <p className="text-center mb-8">{t("working-process-p")}</p>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        <article className="border   py-16 px-8 rounded-xl ">
          <h4 className="text-2xl font-bold text-center">
            {t("exploration-t")}
          </h4>
          <p>{t("exploration-p")}</p>
        </article>
        <article className="border py-12 px-8 rounded-xl">
          <h4 className="text-2xl font-bold text-center">{t("research-t")}</h4>
          <p>{t("research-p")}</p>
        </article>
        <article className="border py-12 px-8 rounded-xl">
          <h4 className="text-2xl font-bold text-center">{t("setup-t")}</h4>
          <p>{t("setup-p")}</p>
        </article>
      </div>
    </section>
  );
}

export default WorkingProcess;
