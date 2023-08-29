import InviewAnimate from "@/components/Animation/InViewAnimate";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function AboutUs() {
  const { t } = useTranslation("aboutus");

  return (
    <>
      <Head>
        <title>{t("headtitle:about-us-t")}</title>
        <meta
          name="description"
          content="1994 yılından bu yana elektronik güvenlik alanında öncü olan şirketimiz, başta alarm sistemleri, kontrollü geçiş sistemleri ve akıllı ev çözümleri olmak üzere geniş bir ürün yelpazesi sunmaktadır. Yenilikçilik ve yüksek kalite anlayışımızla, müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz. Sektördeki deneyimimiz ve uzman kadromuzla, sizlere güvenliğinizi en üst düzeyde sağlayacak çözümler sunuyoruz. Siz de güvende hissetmek için bize katılın!"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SimgeGroup"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col ">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
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
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="z-10"
        >
          <section className="grid grid-cols-2 max-lg:grid-cols-1 mt-12 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-5 m-auto mb-24 rounded-2xl overflow-hidden group">
            <div className="bg-[url('/images/aboutside.jpg')] max-lg:hidden bg-cover bg-no-repeat w-full relative">
              <div className="bg-[#7a18183b] w-full h-full  absolute duration-500 -bottom-1/2 transofrm group-hover:-translate-y-1/2 flex flex-col justify-end">
                <div className="flex   justify-center w-full items-center  h-1/2   duration-300">
                  <div className="w-24 h-24 relative bg-[#ffffff98] group-hover:rotate-45 rounded-lg duration-500">
                    <div className="w-24 h-24 top-2 left-2 absolute bg-[#1d0303de]  rounded-lg duration-500"></div>
                  </div>
                </div>
                <div className="h-1/2 mt-5 flex justify-center items-start">
                  <Image
                    src="/images/logo.png"
                    className="w-60 group-hover:scale-150 max-lg:w-36 duration-700"
                    width={2611}
                    height={609}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <article className=" text-zinc-100 px-10 max-lg:px-7 max-lg:pt-10 max-lg:pb-10 pt-32 pb-32 bg-[#5f1515e7]">
              <h2 className="text-4xl font-bold">{t("caption")}</h2>
              <p className="mt-3 text-lg font-medium">{t("aboutus-p")}</p>
            </article>
          </section>
        </InviewAnimate>
      </main>
    </>
  );
}

export default AboutUs;
