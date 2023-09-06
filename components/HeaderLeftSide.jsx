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
import Link from "next/link";

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
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        className="rounded-l-4xl max-lg:rounded-2xl"
      >
        {carouselItems &&
          carouselItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-10 z-20 max-lg:w-[80%] p-5 rounded-xl bg-[#00000096]">
                  <Link href="/services" >
                    <h1 className=" text-5xl max-lg:text-3xl text-white font-bold underline hover:text-sky-200 duration-300">
                      {item.title}
                    </h1>
                  </Link>
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
    </div>
  );
}

export default HeaderLeftSide;
