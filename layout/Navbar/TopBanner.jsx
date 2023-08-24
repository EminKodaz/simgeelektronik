import Link from "next/link";
import React from "react";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";
import useTranslation from "next-translate/useTranslation";

function TopBanner() {
  const { t } = useTranslation("navbar");
  return (
    <section className="flex max-lg:hidden justify-between  items-center max-lg:w-[95%] min-[2000px]:w-[60%] w-[75%] m-auto max-[1300px]:w-[95%] border-b border-zinc-100 pb-1">
      <tel className="text-xs font-light"> {t("slogan")}</tel>
      <div className="flex items-center justify-between">
        <Link
          className="mr-5 hover:text-red-600 font-light rounded-lg"
          href="alarm-report duration-300"
        >
          {t("password-ac")}
        </Link>
        <Link
          className="border-sky-800 border  py-1 px-3 text-xs font-light rounded-sm flex justify-center hover:border-red-700 hover:text-red-700 duration-300"
          href="alarm-report"
        >
          <MdReport size={16} className="mr-1 text-red-700" />
          {t("alarm-report")}
        </Link>
        <LangItems />
      </div>
    </section>
  );
}

export default TopBanner;
