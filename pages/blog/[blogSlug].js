import BlogCard from "@/components/Blog/BlogCard";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function BlogDetail() {
  const router = useRouter();

  const { blogSlug } = router.query;
  const [interestedBlogs, setItnerestedBlogs] = useState();
  const [filteredBlog, setFilteredBlog] = useState();

  const { t } = useTranslation("blog");

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
    const blogItems = t("blog-list", {}, { returnObjects: true });
    setFilteredBlog(blogItems.filter((item) => item.slug.includes(blogSlug)));
    setItnerestedBlogs(
      blogItems.filter((item) => !item.slug.includes(blogSlug))
    );
    console.log(filteredBlog, " HERE");
  }, [blogSlug]);

  return (
    <>
      <Head>
        {filteredBlog && (
          <title>
            {t("headtitle:blog-t")} | {filteredBlog[0].title}
          </title>
        )}
      </Head>
      <main className="min-h-screen flex flex-col">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[1200px] absolute top-0 left-0 z-0"></div>

        <section className="mt-44 z-10 w-[60%] min-[2000px]:w-[50%] max-[1300px]:w-[90%] max-lg:w-[85%] m-auto">
          {filteredBlog && (
            <article className="mb-12">
              <h1 className="text-4xl font-bold text-lightred">
                {filteredBlog[0].title}
              </h1>
              <h5 className="text-xl font-bold text-darkred mt-3">
                {filteredBlog[0].subCaption}
              </h5>
              <Image
                className="mt-8 rounded-xl m-auto "
                src={filteredBlog[0].image}
                width={2200}
                height={2200}
                alt={filteredBlog[0].title}
              />

              {filteredBlog[0].desc.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="mt-6 max-lg:text-justify font-semibold text-zinc-600 text-lg indent-3"
                  >
                    {item}
                  </p>
                );
              })}

              <div className="mt-12 border-b pb-5 border-t pt-5 flex justify-end flex-col items-end">
                <author className="italic text-lg mb-2 text-zinc-500">
                  {filteredBlog[0].author}
                </author>
                <date className="text-lg text-zinc-400">
                  {filteredBlog[0].createdDate}
                </date>
              </div>
            </article>
          )}
          {interestedBlogs && (
            <>
              <h3 className="mb-7 text-3xl font-semibold text-darkred">
              {t("sub-ilgi")}
              </h3>
              <div className="relative w-full">
                <Swiper
                  ref={sliderRef}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mb-24 "
                  spaceBetween={20}
                  slidesPerView={5}
                  breakpoints={{
                    1600: {
                      width: 1600,
                      slidesPerView: 4,
                    },
                    1300: {
                      width: 1300,
                      slidesPerView: 3,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                    },
                    240: {
                      slidesPerView: 1,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                  }}
                >
                  {interestedBlogs.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <BlogCard
                          slug={item.slug}
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          subCaption={item.subCaption}
                          author={item.author}
                          date={item.createdDate}
                          isSlide={true}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="lg:hidden absolute -bottom-5 left-1/2">
                  <button
                    className="absolute transform -mr-5 top-1/2 -translate-y-1/2 -right-12 border z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c] rounded-full flex items-center justify-center p-2"
                    onClick={handleNext}
                  >
                    <BsChevronRight size={30} />
                  </button>
                  <button
                    className="absolute transform  top-1/2 -translate-y-1/2 -left-12 border z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c]  rounded-full flex items-center justify-center p-2"
                    onClick={handlePrev}
                  >
                    <BsChevronLeft size={30} />
                  </button>
                </div>
                <button
                  className="max-lg:hidden absolute transform  top-1/2 -translate-y-1/2 -right-12 border z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c] rounded-full flex items-center justify-center p-2"
                  onClick={handleNext}
                >
                  <BsChevronRight size={30} />
                </button>
                <button
                  className="max-lg:hidden absolute transform  top-1/2 -translate-y-1/2 -left-12 border z-10 text-sky-500 backdrop-blur-lg bg-[#ffffff0c]  rounded-full flex items-center justify-center p-2"
                  onClick={handlePrev}
                >
                  <BsChevronLeft size={30} />
                </button>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default BlogDetail;
