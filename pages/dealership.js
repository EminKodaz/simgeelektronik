import React from "react";
import InviewAnimate from "@/components/Animation/InViewAnimate";
import useTranslation from "next-translate/useTranslation";
import DealershipContent from "@/components/Dealership/DealershipContent";
import DealershipForm from "@/components/Dealership/DealershipForm";
import Head from "next/head";
import { MdLogin } from "react-icons/md";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function DealerShip() {
  const { t } = useTranslation("dealership");
  return (
    <>
      <Head>
        <title>{t("headtitle:dealership-t")}</title>
        <meta name="description" content="SİMGE GROUP'un bayilik programına katılmak ve elektronik güvenlik sektöründe başarılı bir iş ortağı olmak için bayilik başvuru sayfamızı kullanın. İş fırsatları için başvurun." />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SimgeGroup"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col m-auto min-h-screen text-center">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[1200px] absolute top-0 left-0 z-0"></div>
        <div className="z-10 my-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(-300px)"
            className="w-full"
          >
            <section className="">
              <h1 className="md:text-6xl text-3xl text-darkred text-center">
                {t("dealershipHeader")}
              </h1>
              <div className="flex mt-5 items-center justify-center">
                <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
                <div className="w-4 h-4 bg-darkred rounded-full "></div>
              </div>
              <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
                {t("dealershipDescription")}
              </p>
            </section>
          </InviewAnimate>
          <InviewAnimate
            bezier={bezier}
            translate="translateY(300px)"
            className="w-full"
          >
            <article className="w-full h-full md:h-[36rem] md:px-8 md:py-4 px-3 gap-2 mt-14 flex flex-col md:flex-row justify-between items-center md:rounded-[2.5rem] rounded-2xl bg-darkred relative">
              <MdLogin
                className="absolute z-10 right-24 bottom-16 text-[#ffffff7e] max-lg:hidden"
                size={140}
              />
              <InviewAnimate
                bezier={bezier}
                translate="translateX(300px)"
                className="w-full"
              >
                <DealershipForm />
              </InviewAnimate>
              <InviewAnimate
                bezier={bezier}
                translate="translateX(-300px)"
                className="w-full"
              >
                <DealershipContent />
              </InviewAnimate>
            </article>
          </InviewAnimate>
        </div>
      </main>
    </>
  );
}

export default DealerShip;
