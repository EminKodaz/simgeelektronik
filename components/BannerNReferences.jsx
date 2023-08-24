import React from "react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function BannerNReferences() {
  const { t } = useTranslation("home");

  return (
    <div className="mb-48 mt-16 relative">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 spreadShadow w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto rounded-xl bg-white p-10 z-10 relative">
        <article>
          <h2 className="text-6xl font-bold mb-5 text-zinc-800">
            {t("banner-ref-head")}
          </h2>
          <div className="flex mt-6 mb-6 items-center ">
            <div className="w-32 h-3 bg-lightred rounded-full mr-3"></div>
            <div className="w-5 h-5 bg-darkred rounded-full "></div>
          </div>
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
      <div className="w-full  bg-lightred h-64 flex items-baseline absolute -bottom-32 z-0">
        <div className="w-[75%] max-lg:w-[95%] m-auto ">
          <Swiper
            modules={[Keyboard, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            className="mt-28  w-full text-center text-white text-xl"
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
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
