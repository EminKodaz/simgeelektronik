import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function QuickLinks() {
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setMenuItems(t("footer:menuItems", {}, { returnObjects: true }));
  }, [t]);

  return (
    <ul className="text-zinc-600 flex flex-col justify-around items-start mx-auto">
      <h1 className="text-xl text-white font-bold mb-4">
        {t("footer:quickMenuHeader")}
      </h1>
      {menuItems.map((item) => {
        return (
          <li
            className="font-medium flex w-full text-center relative group"
            key={item.id}
          >
            <Link
              className="duration-200 h-full w-full p-1 hover:bg-slate-300 flex items-center text-zinc-300 hover:text-lightred rounded-sm"
              href={item.link ? item.link : ""}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default QuickLinks;
