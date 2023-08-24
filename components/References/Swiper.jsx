import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Swiper
      className="my-5 pl-40 h-72 flex justify-center items-center"
      slidesPerView={slidesPerView}
      modules={[Autoplay]}
      loop={loop}
      speed={speed}
      autoplay={{
        delay: delay,
        pauseOnMouseEnter: true,
        reverseDirection: reverseDirection,
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
              width={300}
              height={300}
              className="p-4 m-auto flex flex-row justify-center flex-wrap content-center "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
