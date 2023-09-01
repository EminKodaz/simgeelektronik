import React from "react";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
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
      <div className="grid overflow-hidden grid-cols-2 max-lg:grid-cols-1 spreadShadow w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto rounded-4xl bg-white p-10 z-10 relative">
        <div className="absolute w-60 h-60 bg-lightrans rounded-2xl rotate-45 z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
        <article className="z-20">
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
        <div className="p-5 z-20">
          <Image
            src="/images/alarmset2.jpg"
            width={800}
            height={702}
            alt="alarmset"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="w-full h-64 flex items-baseline absolute -bottom-44 z-0 bg-[url('/images/refslidebg.png')] bg-cover bg-no-repeat">
        <div className="w-[75%]  max-lg:w-[95%] m-auto">
          <h2 className="mt-20 text-2xl text-center pb-2 font-semibold text-lightred">
            Bizi Tercih Eden Kurumlar
          </h2>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            speed={1000}
            className="flex flex-row justify-center flex-wrap content-center"
            style={{ display: "flex" }}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
            breakpoints={{
              // when window width is >= 480px
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              240: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <Image
                src="/references/arcelik.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/ak.png"
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                width={300}
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/cb.png"
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                width={300}
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/dominos.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/halkbank.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/meb.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/ktb.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/deniz.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/maliye.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/references/merkezb.png"
                width={300}
                className="aspect-3 w-1/2 object-contain md:p-4 m-auto max-h-full flex flex-row content-center"
                height={300}
                alt="arcelik"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BannerNReferences;
