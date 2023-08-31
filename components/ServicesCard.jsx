import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicesCard({ id, title, icon, desc, url, info, offer }) {
  return (
    <div className="p-3 grid place-content-between">
      {icon && (
        <Image
          className="w-53 m-auto rounded-2xl shadow-lg"
          src={icon}
          width={1080}
          height={1080}
          alt={title}
        />
      )}
      <h5 className="text-2xl font-semibold text-center mb-3 text-lightred">
        {title}
      </h5>
      <p className="text-zinc-600 font-semibold mb-3 max-lg:text-justify">
        {desc}
      </p>
      <div className="">
        <Link
          className="bg-sky-700 hover:bg-sky-600 active:bg-sky-500 duration-200 text-white rounded-xl text-base flex justify-center items-center px-4 py-2"
          href={url}
        >
          {info}
        </Link>
      </div>
    </div>
  );
}

export default ServicesCard;
