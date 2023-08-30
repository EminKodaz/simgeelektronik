import InviewAnimate from "@/components/Animation/InViewAnimate";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Products() {
  const { t } = useTranslation("products");
  const [prodMenuItems, setProdMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("thief");
  const [products, setProducts] = useState();

  useEffect(() => {
    setProdMenuItems(t("products:prodMenuItems", {}, { returnObjects: true }));
    setProducts(t(`${selectedMenu}`, {}, { returnObjects: true }));
  }, [selectedMenu, t]);

  return (
    <>
      <Head>
        <title>{t("headtitle:products-t")}</title>
      </Head>
      <main className="flex flex-col relative overflow-hidden">
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
        <InviewAnimate
          bezier={bezier}
          translate="translateX(-300px)"
          className="z-10"
        >
          <div className="grid grid-cols-4 relative z-30 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto mb-24 gap-7 mt-12">
            <div className="col-span-1">
              <ul className="border p-3 pb-10 bg-[#ffffff9a] rounded-3xl">
                {prodMenuItems &&
                  prodMenuItems.map((item) => {
                    return (
                      <li
                        className={`${
                          selectedMenu === item.setter
                            ? "border-lightred"
                            : "border-transparent"
                        } py-1 border-b-2  m-2 text-lg font-semibold cursor-pointer`}
                        key={item.id}
                        onClick={() => setSelectedMenu(item.setter)}
                      >
                        {item.title}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <ul className="grid grid-cols-4 col-span-3 border p-5 gap-3 rounded-3xl bg-[#ffffffa9] duration-300 min-h-[36rem]">
              {products &&
                products.map((item) => {
                  return (
                    <InviewAnimate
                      key={item.id}
                      bezier={bezier}
                      translate="translateY(-50px)"
                      className="z-10"
                    >
                      <li className="">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={2000}
                          height={1000}
                          className="rounded-lg"
                        />
                        {item.title}
                      </li>
                    </InviewAnimate>
                  );
                })}
            </ul>
          </div>
        </InviewAnimate>
      </main>
    </>
  );
}

export default Products;
