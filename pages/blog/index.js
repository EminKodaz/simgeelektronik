import InviewAnimate from "@/components/Animation/InViewAnimate";
import BlogList from "@/components/Blog/BlogList";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Blog() {
  const { t } = useTranslation("blog");

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main className="flex flex-col">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
        <div className="z-10 mt-44  min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(-300px)"
            className="w-full"
          >
            <section className="">
              <h1 className="text-6xl text-darkred text-center">
                {t("blog-header")}
              </h1>
              {/* <div className="flex mt-5 justify-center">
                <div className="w-7 h-7 bg-darkred rounded-full "></div>
                <div className="w-7 h-7 bg-lightred rounded-full ml-3"></div>
                <div className="w-7 h-7 bg-darkred rounded-full ml-3"></div>
              </div> */}
              <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
                {t("blog-desc")}
              </p>
            </section>
          </InviewAnimate>
        </div>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <BlogList />
        </InviewAnimate>
      </main>
    </>
  );
}

export default Blog;
