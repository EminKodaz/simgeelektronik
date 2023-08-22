import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({
  id,
  image,
  title,
  subCaption,
  author,
  date,
  slug,
  isSlide,
}) {
  return (
    <Link
      href={slug}
      className={` ${
        isSlide === true
          ? ""
          : "border duration-300 rounded-xl overflow-hidden hover:shadow-xl"
      } transform hover:-translate-y-2`}
    >
      <Image
        className={isSlide ? "rounded-md" : ""}
        src={image}
        alt={title}
        width={2203}
        height={2238}
      />
      <div className="p-3">
        <h2 className="text-xl font-bold text-zinc-800 mt-1">{title}</h2>
        <p className="mt-2 text-lg text-zinc-600">{subCaption}</p>
        <div className="flex justify-between mt-3">
          <author className="text-zinc-500">{author}</author>
          <date className="text-zinc-500">{date}</date>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
