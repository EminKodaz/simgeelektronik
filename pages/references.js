import InviewAnimate from "@/components/Animation/InViewAnimate";
import SwiperSlider from "@/components/References/Swiper";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function References() {
  const { t } = useTranslation("references");

  return (
    <main className="flex flex-col min-h-screen min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]">
      <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
      <div className="z-10">
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-300px)"
          className="w-full"
        >
          <section className="mt-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
            <h1 className="text-6xl text-darkred text-center">
              {t("referencesHeader")}
            </h1>
            {/* <div className="flex mt-5 justify-center">
              <div className="w-7 h-7 bg-darkred rounded-full "></div>
              <div className="w-7 h-7 bg-lightred rounded-full ml-3"></div>
              <div className="w-7 h-7 bg-darkred rounded-full ml-3"></div>
            </div> */}
            <p className="px-20 max-lg:px-0 max-lg:text-left text-center text-xl mt-5 font-semibold text-zinc-600">
              {t("referencesDescription")}
            </p>
          </section>
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <SwiperSlider
            delay={2000}
            loop={true}
            reverseDirection={false}
            slidesPerView={3}
            speed={1000}
            data={"data"}
          />
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <SwiperSlider
            delay={1000}
            loop={true}
            reverseDirection={true}
            slidesPerView={4}
            speed={2000}
            data={"data"}
          />
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <SwiperSlider
            delay={1500}
            loop={true}
            reverseDirection={false}
            slidesPerView={2}
            speed={1500}
            data={"data"}
          />
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <SwiperSlider
            delay={3000}
            loop={true}
            reverseDirection={true}
            slidesPerView={3}
            speed={3000}
            data={"data"}
          />
        </InviewAnimate>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(300px)"
          className="w-full"
        >
          <SwiperSlider
            delay={2000}
            loop={true}
            reverseDirection={false}
            slidesPerView={3}
            speed={1000}
            data={"data"}
          />
        </InviewAnimate>
      </div>
    </main>
  );
}

export default References;
