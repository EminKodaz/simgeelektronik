import InviewAnimate from "@/components/Animation/InViewAnimate";
import CertificateCard from "@/components/Certificates/CertificateCard2";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Certificates() {
  const { t } = useTranslation("certificates");
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(t("allCertficates", {}, { returnObjects: true }));
    console.log(certificates);
  }, [t]);

  return (
    <>
      <Head>
        <title>{t("headtitle:certificates-t")}</title>
        <meta name="description" content="SİMGE GROUP olarak, elektronik güvenlik sektöründe kalite ve güveni temsil ediyoruz. Sektör lideri olarak aldığımız sertifikaları keşfedin ve işimize olan bağlılığımıza güvenin." />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SimgeGroup"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[1200px] absolute top-0 left-0 z-0"></div>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-200px)"
          className="z-10"
        >
          <section className="mt-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
            <h1 className="md:text-6xl text-3xl text-darkred text-center">
              {t("caption")}
            </h1>
            <div className="flex mt-5 items-center justify-center">
              <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
              <div className="w-4 h-4 bg-darkred rounded-full "></div>
            </div>
            <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
              {t("main-desc")}
            </p>
          </section>
        </InviewAnimate>
        <div className="max-lg:my-3 my-24 m-auto items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {certificates &&
            certificates.map((certificate, index) => {
              return (
                <CertificateCard
                  key={index}
                  name={certificate.name}
                  url={certificate.url}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}

export default Certificates;
