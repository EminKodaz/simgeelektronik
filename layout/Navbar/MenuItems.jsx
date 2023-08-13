import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const { t, lang } = useTranslation();

  useEffect(() => {
    setMenuItems(t("navbar:menuItems", {}, { returnObjects: true }));
  }, [t]);

  return (
    <ul className="text-zinc-600 flex w-[60%] justify-around items-center max-lg:hidden">
      {menuItems.map((item) => {
        return (
          <li className=" font-medium flex text-center" key={item.id}>
            <Link
              className="duration-200 h-full p-2"
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

export default MenuItems;
