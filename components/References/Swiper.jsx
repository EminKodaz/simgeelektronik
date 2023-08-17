import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function SwiperSlider({
  slidesPerView,
  loop,
  speed,
  delay,
  reverseDirection,
  data,
}) {
  //   SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="my-28 pl-40 h-24 flex justify-center items-center  border-2 border-gray-200"
      slidesPerView={slidesPerView}
      modules={[Autoplay]}
      loop={loop}
      speed={speed}
      autoplay={{
        delay: delay,
        pauseOnMouseEnter: true,
        reverseDirection: reverseDirection,
      }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 1
      </SwiperSlide>
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 3
      </SwiperSlide>
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 4
      </SwiperSlide>
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 5
      </SwiperSlide>
      <SwiperSlide
        className="flex flex-row justify-center flex-wrap content-center"
        style={{ display: "flex" }}
      >
        Slide 6
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
