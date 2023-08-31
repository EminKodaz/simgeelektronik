import InviewAnimate from "@/components/Animation/InViewAnimate";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Payments() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("headtitle:payments-t")}</title>
        <meta
          name="description"
          content="Teknolojinin gücünü güvenlikle buluşturan şirketimiz, alarm sistemleri, kontrollü geçiş sistemleri ve akıllı ev çözümleri ile ev ve işyeri güvenliğini en üst düzeye taşıyor. Yenilikçi yaklaşımımız, yüksek kalitemiz ve üstün hizmet anlayışımızla, sizlere güvenli bir yaşam alanı sunuyoruz. İleri teknoloji ile güçlendirilmiş çözümlerimizle, ev güvenliğini artırmak ve işyeri korumasını optimize etmek artık çok daha kolay. Siz de güvenliğiniz için adım atın!"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SimgeGroup"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col relative overflow-hidden min-h-screen">
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
      </main>
    </>
  );
}

export default Payments;
