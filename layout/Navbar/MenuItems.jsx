import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setMenuItems(t("navbar:menuItems", {}, { returnObjects: true }));
  }, [t]);

  return (
    <ul className="text-zinc-600 flex w-[60%] justify-around items-center max-lg:hidden">
      {menuItems.map((item) => {
        return (
          <li
            className="font-medium flex text-center relative group"
            key={item.id}
          >
            <Link
              className="duration-200 h-full p-2 flex items-center hover:text-lightred"
              href={item.link ? item.link : ""}
            >
              {item.title}
              {item.submenu && (
                <BiChevronDown
                  size={24}
                  className={`${
                    item.submenu && "group-hover:rotate-180 duration-300"
                  }`}
                />
              )}
            </Link>
            {item.submenu && (
              <ul className="absolute  top-7 py-3 left-1/2 transform -translate-x-1/2 w-44 border hidden group-hover:flex flex-col justify-start items-start p-3 rounded-md bg-[#fffffffb]">
                {item.submenu.map((item) => {
                  return (
                    <li key={item.id} className="py-1 hover:text-lightred">
                      <Link href="" className="py-1 ">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default MenuItems;
