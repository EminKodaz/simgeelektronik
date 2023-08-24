import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { MdPhone } from "react-icons/md";

function PopupForm() {
  const { t } = useTranslation("navbar");

  return (
    <div className="fixed bottom-5 border border-zinc-300 shadow-2xl right-5 z-50 flex flex-col items-center justify-center rounded-xl bg-[#fffffff6] p-2">
      <Link
        href=""
        className="text-lg p-2 px-5  bg-sky-600 rounded-xl  text-white"
      >
        {t("exploration-form")}
      </Link>
      <p className="text-zinc-500"> {t("exp-t")}</p>
      <tel className="flex items-center text-lg text-zinc-700">
        <MdPhone />
        +90 (312) 287 17 40
      </tel>
      {/* <p className="text-zinc-500"> {t("exp-t-2")}</p> */}
    </div>
  );
}

export default PopupForm;
