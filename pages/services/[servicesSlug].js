import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import ServicesCard from "@/components/ServicesCard";
import InviewAnimate from "@/components/Animation/InViewAnimate";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Services() {
  const [servicesItems, setServicesItems] = useState([]);
  const router = useRouter();
  const [servicesHead, setServicesHead] = useState("");
  const { t } = useTranslation("services");

  useEffect(() => {
    setServicesItems(t("services-items", {}, { returnObjects: true }));
    switch (router.query.servicesSlug) {
      case "kurumsal-cozumler":
        setServicesHead(t("corporate-head"));
        break;
      case "ev-cozumleri":
        setServicesHead(t("home-head"));
        break;
      case "is-yeri-cozumleri":
        setServicesHead(t("workplace-head"));
        break;
      default:
        break;
    }
  }, [router.query, t]);

  return (
    <>
      <Head>
        <title>
          {t("headtitle:services-t")} || {servicesHead && servicesHead}
        </title>
        <meta name="description" content="" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content=""></meta>
        <meta name="publisher" content=""></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col relative">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[1200px] absolute top-0 left-0 z-0"></div>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="z-10"
        >
          <section className="mt-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
            <h1 className="md:text-6xl text-3xl text-darkred text-center">
              {t("caption-1")}
            </h1>
            <div className="flex mt-5 items-center justify-center">
              <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
              <div className="w-4 h-4 bg-darkred rounded-full "></div>
            </div>
            <p className="px-20 max-lg:px-0 max-lg:text-justify text-center text-xl mt-5 font-semibold text-zinc-600">
              {t("main-desc")}
            </p>
          </section>
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="z-10"
        >
          <article className=" max-lg:mt-5 mt-12 min-[2000px]:w-[60%] max-[1300px]:gap-x-5 max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] py-10 max-lg:pt-10 max-lg:py-0 m-auto">
            <h2 className="text-4xl text-lightred font-semibold max-lg:mb-10 text-center">
              <span className="text-darkred font-bold">
                {servicesHead ? servicesHead : t("caption-3")}
              </span>
            </h2>
          </article>
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="z-10"
        >
          <section className=" grid grid-cols-3  gap-x-5 gap-y-10 max-lg:grid-cols-1 max-lg:mt-5 mt-12 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] m-auto mb-36">
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
            <div className="flex items-center">
              <Link
                href="/products"
                className=" flex w-full justify-center items-center border bg-sky-700 text-white py-5 rounded-xl text-xl font-bold hover:bg-sky-600 duration-300"
              >
                Ürünlerimize Göz Atın{" "}
                <MdOutlineSubdirectoryArrowRight
                  size={24}
                  className="ml-3 mt-1"
                />
              </Link>
            </div>
          </section>
        </InviewAnimate>
      </main>
    </>
  );
}

export default Services;
