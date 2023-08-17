import SwiperSlider from "@/components/References/Swiper";
import React from "react";

function References() {
  return (
    <main className="flex flex-col m-auto min-h-screen w-[80%]">
      <div className="mt-40">
        <h1 className="text-4xl font-bold text-center mb-20">References</h1>
        <SwiperSlider
          delay={2000}
          loop={true}
          reverseDirection={false}
          slidesPerView={3}
          speed={1000}
          data={"data"}
        />
        <SwiperSlider
          delay={1000}
          loop={true}
          reverseDirection={true}
          slidesPerView={4}
          speed={2000}
          data={"data"}
        />
        <SwiperSlider
          delay={1500}
          loop={true}
          reverseDirection={false}
          slidesPerView={2}
          speed={1500}
          data={"data"}
        />
        <SwiperSlider
          delay={3000}
          loop={true}
          reverseDirection={true}
          slidesPerView={3}
          speed={3000}
          data={"data"}
        />
      </div>
    </main>
  );
}

export default References;
