import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWpforms } from "react-icons/fa";

function HeaderRightSide() {
  const { t } = useTranslation("home");

  return (
    <div className="flex justify-end relative  rounded-4xl p-2 bg-[#7c2b2b36] ">
      <Image
        src="/images/headerimg.jpg"
        className="w-[85%] max-[1300px]:w-[95%] shadow-xl rounded-4xl"
        width={5130}
        height={4380}
        alt=""
      />
      <Link
        href=""
        className="absolute flex items-center py-3 px-5 text-xl font-bold bottom-5 rounded-4xl bg-sky-600 text-white -left-4 hover:bg-sky-500 duration-300"
      >
        <FaWpforms className="mr-3" />
        {t("exploration-link")}
      </Link>
    </div>
  );
}

export default HeaderRightSide;
