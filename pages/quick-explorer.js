import InviewAnimate from "@/components/Animation/InViewAnimate";
import QuickExplorerHeader from "@/components/QuickExplorer/QuickExplorerHeader";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function QuickExplorer() {
  const { t } = useTranslation("quickExplorer");

  return (
    <>
      <Head>
        <title>{t("headtitle:contact-us-t")}</title>
        <meta name="description" content="" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content=""></meta>
        <meta name="publisher" content=""></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col m-auto min-h-screen text-center overflow-hidden">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
        <div className="z-10 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(-300px)"
            className="w-full"
          >
            <section className="md:mt-44">
              <h1 className="md:text-6xl text-3xl text-darkred text-center">
                {t("quickExplorerHeader")}
              </h1>
              <div className="flex mt-5 items-center justify-center">
                <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
                <div className="w-4 h-4 bg-darkred rounded-full "></div>
              </div>
              <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
                {t("quickExplorerDescription")}
              </p>
            </section>
          </InviewAnimate>
          <QuickExplorerHeader />
        </div>
      </main>
    </>
  );
}

export default QuickExplorer;
