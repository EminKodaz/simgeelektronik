import Link from "next/link";
import React from "react";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";
import useTranslation from "next-translate/useTranslation";
import UserProcess from "./UserProcess";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

function TopBanner() {
  const { t } = useTranslation("navbar");
  return (
    <section className="flex max-lg:hidden justify-between  items-center max-lg:w-[95%] min-[2000px]:w-[60%] w-[75%] m-auto max-[1300px]:w-[95%] border-b border-zinc-100 pb-1">
      <div className="text-xs font-light"> {t("slogan")}</div>
      <div className="flex items-center justify-between">
        <tel className="flex items-center text-zinc-600">
          <BsFillTelephoneForwardFill size={14} className="mr-2 !text-sky-600" />
          {t("header")}
        </tel>
        <UserProcess />
        <LangItems />
      </div>
    </section>
  );
}

export default TopBanner;
