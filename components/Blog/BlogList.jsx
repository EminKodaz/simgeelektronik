import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import BlogCard from "./BlogCard";

function BlogList() {
  const [blogItems, setBlogItems] = useState([]);

  const { t } = useTranslation("blog");

  useEffect(() => {
    setBlogItems(t("blog-list", {}, { returnObjects: true }));
  }, [t]);

  return (
    <section className="grid grid-cols-3 max-lg:grid-cols-1 z-10 max-lg:mt-8 mt-16 gap-14 w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto mb-24">
      {blogItems &&
        blogItems.map((item, index) => {
          return (
            <BlogCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              subCaption={item.subCaption}
              author={item.author}
              date={item.createdDate}
              slug={item.slug}
            />
          );
        })}
    </section>
  );
}

export default BlogList;
