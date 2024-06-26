import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { MdPhone } from "react-icons/md";

function PopupForm() {
  const { t } = useTranslation("navbar");

  return (
    <div className="fixed bottom-3  shadow-2xl right-3 z-50 flex flex-col items-center justify-center rounded-xl bg-[#ffffff81]  p-1">
      <Link
        href="/quick-explorer"
        className="text-base p-2 px-5  bg-sky-600 hover:bg-sky-500 hover:text-zinc-900 rounded-xl  text-white duration-200"
      >
        {t("exploration-form")}
      </Link>
      {/* <p className="text-zinc-600 text-sm"> {t("exp-t")}</p> */}
      {/* <tel className="flex items-center text-base text-zinc-600">
        <MdPhone />
        +90 (312) 287 17 40
      </tel> */}
      {/* <p className="text-zinc-500"> {t("exp-t-2")}</p> */}
    </div>
  );
}

export default PopupForm;
