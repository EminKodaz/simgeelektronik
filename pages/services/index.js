import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import ServicesCard from "@/components/ServicesCard";
import InviewAnimate from "@/components/Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Services() {
  const [servicesItems, setServicesItems] = useState([]);
  const { t } = useTranslation("services");

  useEffect(() => {
    setServicesItems(t("services-items", {}, { returnObjects: true }));
  }, [t]);

  return (
    <>
      <main className=" flex flex-col relative">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="z-10"
        >
          <section className="mt-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
            <h1 className="text-6xl text-darkred text-center">
              {t("caption-1")}
            </h1>
            {/* <div className="flex mt-5 justify-center">
              <div className="w-7 h-7 bg-darkred rounded-full "></div>
              <div className="w-7 h-7 bg-lightred rounded-full ml-3"></div>
              <div className="w-7 h-7 bg-darkred rounded-full ml-3"></div>
            </div> */}
            <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
              {t("main-desc")}
            </p>
          </section>
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="z-10"
        >
          <article className="grid grid-cols-2 max-lg:grid-cols-1  max-lg:mt-5 mt-12 min-[2000px]:w-[60%] max-[1300px]:gap-x-5 max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] py-10 m-auto">
            <h2 className="text-4xl text-lightred font-semibold max-lg:mb-10">
              {t("caption-2")}{" "}
              <span className="text-darkred font-bold">{t("caption-3")}</span>
            </h2>
            <p className="text-zinc-600 font-semibold">{t("sub-desc")}</p>
          </article>
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="z-10"
        >
          <section className=" grid grid-cols-3 gap-x-5 gap-y-10 max-lg:grid-cols-1 max-lg:mt-5 mt-12 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] m-auto mb-36">
            {servicesItems.map((item) => {
              return (
                <ServicesCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                  url={item.slug}
                  info={t("information")}
                />
              );
            })}
          </section>
        </InviewAnimate>
      </main>
    </>
  );
}

export default Services;
