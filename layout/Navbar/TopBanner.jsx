import Link from "next/link";
import React from "react";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";

function TopBanner() {
  return (
    <section className="flex max-lg:hidden justify-between items-center max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]">
      <tel className="text-xs font-light">Tel: +90 (312) 287 17 40 (PBX)</tel>
      <div className="flex items-center justify-between">
        <Link
          className="mr-5 hover:text-red-600 font-light rounded-lg"
          href="alarm-report duration-300"
        >
          Şifre Talebi
        </Link>
        <Link
          className="border-sky-800 border  py-1 px-3 text-xs font-light rounded-sm flex justify-center hover:border-red-700 hover:text-red-700 duration-300"
          href="alarm-report"
        >
          <MdReport size={16} className="mr-1 text-red-700" />
          Alarm Raporları
        </Link>
        <LangItems />
      </div>
    </section>
  );
}

export default TopBanner;
