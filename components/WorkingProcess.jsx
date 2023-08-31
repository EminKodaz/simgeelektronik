import useTranslation from "next-translate/useTranslation";
import React from "react";

function WorkingProcess() {
  const { t } = useTranslation("home");

  return (
    <section className="w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto  mt-16 mb-16">
      <h2 className="text-center text-3xl font-bold mb-3 text-lightred">
        {t("working-process")}
      </h2>
      <p className="text-center mb-8 text-xl font-semibold text-zinc-700">
        {t("working-process-p")}
      </p>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        <article className="rounded-xl bg-[url('/images/mainpagekesif-min.webp')] bg-cover relative group overflow-hidden h-80">
          <p className="w-full font-bold p-5 text-white flex justify-center items-center h-full absolute -top-full group-hover:top-0 duration-300 bg-[#6d23236e] ease-in-out">
            {t("exploration-p")}
          </p>
          <h4 className="text-5xl bg-[#00000062] flex justify-center items-center  w-full font-bold bottom-0 group-hover:-bottom-full duration-300  text-center text-white absolute ease-in-out h-full">
            {t("exploration-t")}
          </h4>
        </article>
        <article className="rounded-xl bg-[url('/images/mainpageteklif-min.webp')] bg-cover relative group overflow-hidden h-80">
          <p className="w-full font-bold p-5 text-white flex justify-center items-center h-full absolute -top-full group-hover:top-0 duration-300 bg-[#6d23236e] ease-in-out">
            {t("research-p")}
          </p>
          <h4 className="text-5xl bg-[#00000062] flex justify-center items-center  w-full font-bold bottom-0 group-hover:-bottom-full duration-300  text-center text-white absolute ease-in-out h-full">
            {t("research-t")}
          </h4>
        </article>
        <article className="rounded-xl bg-[url('/images/mainpagekurulum-min.webp')] bg-cover relative group overflow-hidden h-80">
          <p className="w-full font-bold p-5 text-white flex justify-center items-center h-full absolute -top-full group-hover:top-0 duration-300 bg-[#6d23236e] ease-in-out">
            {t("setup-p")}
          </p>
          <h4 className="text-5xl bg-[#00000062] flex justify-center items-center  w-full font-bold bottom-0 group-hover:-bottom-full duration-300  text-center text-white absolute ease-in-out h-full">
            {t("setup-t")}
          </h4>
        </article>
      </div>
    </section>
  );
}

export default WorkingProcess;
