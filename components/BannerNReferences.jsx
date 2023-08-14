import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function BannerNReferences() {
  const { t } = useTranslation("home");

  return (
    <div className="mb-48 mt-16 relative">
      <div className="grid grid-cols-2 spreadShadow w-[75%] m-auto rounded-xl bg-white p-10 z-10 relative">
        <article>
          <h2 className="text-6xl font-bold mb-5 text-zinc-800">
            {t("banner-ref-head")}
          </h2>
          <p className="text-lg font-medium text-zinc-700">
            {t("banner-ref-p")}
          </p>
          <h3 className="text-2xl font-bold mb-2 mt-5">
            {t("banner-ref-head-2")}
          </h3>
          <p>{t("banner-ref-p-2")}</p>
          <h3 className="text-2xl font-bold mb-2 mt-5">
            {t("banner-ref-head-3")}
          </h3>
          <p>{t("banner-ref-p-3")}</p>
          <div className="flex justify-center mt-5">
            <div className="w-10 h-10 bg-darkred rounded-full "></div>
            <div className="w-10 h-10 bg-lightred rounded-full ml-3"></div>
            <div className="w-10 h-10 bg-darkred rounded-full ml-3"></div>
          </div>
        </article>
        <div className="p-5">
          <Image
            src="/images/alarmset2.jpg"
            width={800}
            height={702}
            alt="alarmset"
          />
        </div>
      </div>
      <div className="w-screen border bg-lightred-2 h-64 flex items-baseline absolute -bottom-32 z-0">
        <div className="w-[75%] m-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mt-28"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BannerNReferences;
