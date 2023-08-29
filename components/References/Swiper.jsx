import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

function SwiperSlider({
  slidesPerView,
  loop,
  speed,
  delay,
  reverseDirection,
  data,
}) {
  return (
    <Swiper
      className="my-5 md:pl-40 h-72 flex justify-center items-center"
      slidesPerView={slidesPerView}
      spaceBetween={30}
      modules={[Autoplay]}
      loop={loop}
      speed={speed}
      autoplay={{
        delay: delay,
        pauseOnMouseEnter: true,
        reverseDirection: reverseDirection,
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            className="flex flex-row justify-center flex-wrap content-center"
            style={{ display: "flex" }}
          >
            <Image
              src={item.url}
              alt={item.title}
              layout={"fill"}
              objectFit={"contain"}
              className="md:p-4 m-auto max-h-full flex flex-row justify-center flex-wrap content-center "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
