import React, { useCallback, useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import HeaderRightSide from "./HeaderRightSide";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function HeaderLeftSide() {
  const { t } = useTranslation("home");
  const [carouselItems, setCarouselItems] = useState([]);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    setCarouselItems(t("home:carouselItems", {}, { returnObjects: true }));
  }, [t]);

  return (
    <div className="max-lg:mb-0 relative col-span-3 shadow-xl rounded-l-4xl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        speed={500}
        pagination={true}
        ref={sliderRef}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        className="rounded-l-4xl max-lg:rounded-2xl"
      >
        {carouselItems &&
          carouselItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-10 z-20 max-lg:w-[80%] p-5 rounded-xl bg-[#00000096]">
                  <h1 className=" text-5xl max-lg:text-3xl text-white font-bold ">
                    {item.title}
                  </h1>
                  <p className="text-xl max-lg:text-sm mt-5 max-lg:mt-3 text-white max-lg:hidden w-[65%] max-lg:w-full">
                    {item.desc}
                  </p>
                </div>
                <Image
                  src={item.image}
                  alt="ev"
                  className="w-full"
                  width={1024}
                  height={512}
                />
              </SwiperSlide>
            );
          })}

        <button
          className="absolute transform max-lg:hidden bottom-1 right-5 z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c] rounded-full flex items-center justify-center p-2"
          onClick={handleNext}
        >
          <BsChevronRight size={44} />
        </button>
        <button
          className="absolute transform max-lg:hidden  bottom-1 left-5 z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c]  rounded-full flex items-center justify-center p-2"
          onClick={handlePrev}
        >
          <BsChevronLeft size={44} />
        </button>
      </Swiper>
      <HeaderRightSide />
      {/* <h1 className="text-5xl max-[1300px]:text-4xl font-bold mb-5 text-darkred">
        {t("slogan-part-1")}
      </h1>
      <h1 className="text-5xl max-[1300px]:text-4xl font-bold text-lightred">
        {t("slogan-part-2")}
      </h1>
      <div className="flex mt-5 items-center">
        <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
        <div className="w-4 h-4 bg-darkred rounded-full "></div>
      </div>
      <article className="font-medium text-zinc-500 mt-5 indent-2">
        {t("article-1")}
      </article>
      <div className="flex  mt-10 w-3/4 max-lg:w-full justify-between">
        <div className="flex flex-col items-center justify-center ">
          <Counter maxCount={11} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">
            {t("experience")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <Counter maxCount={32} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">
            {t("product")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <Counter maxCount={100} />
          <p className="text-2xl font-medium max-lg:text-lg text-darkred">
            {t("project-done")}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default HeaderLeftSide;
